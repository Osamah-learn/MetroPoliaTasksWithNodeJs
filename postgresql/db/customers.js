const db = require("./dbConfig");

// Get all customers
const getAllCustomers = (req, res) => {
  db.query("SELECT * FROM customers", (err, result) => {
    if (err) console.error(err);
    else res.json(result.rows);
  });
};

// Get customer by id
const getCustomerById = (req, res) => {
  const query = {
    text: "SELECT * FROM customers WHERE id = $1",
    values: [req.params.id],
  };

  db.query(query, (err, result) => {
    if (err) {
      return console.error("Error executing query", err.stack);
    } else {
      if (result.rows.length > 0) res.json(result.rows);
      else res.status(404).end();
    }
  });
};

// Add new coustmer
const addCustomer = (req, res) => {
  // Extract movie from the request body and generate id
  const newCoustmer = req.body;
  const query = {
    text: "INSERT INTO customers (firstname,lastname,email,phone) VALUES ($1,$2,$3,$4)",
    values: [
      newCoustmer.firstname,
      newCoustmer.lastname,
      newCoustmer.email,
      newCoustmer.phone,
    ],
  };

  db.query(query, (err, res) => {
    if (err) {
      return console.error("Error executing query", err.stack);
    }
  });

  res.json(newCoustmer);
};

//Delete cuostmer
const deleteCoustmer = (req, res) => {
  const query = {
    text: "DELETE FROM customers WHERE id = $1",
    values: [req.params.id],
  };

  db.query(query, (err, res) => {
    if (err) {
      return console.error("Error executing query", err.stack);
    }
  });

  res.status(204).end();
};

// Update cuostmer
const updateCoustmer = (req, res) => {
  // Extract edited movie from the request body
  const editedCuostmer = req.body;
  const query = {
    text: "UPDATE customers SET firstname=$1, lastname=$2, email=$3, phone=$4 WHERE id = $5",
    values: [
      editedCuostmer.firstname,
      editedCuostmer.lastname,
      editedCuostmer.email,
      editedCuostmer.phone,
      req.params.id,
    ],
  };

  db.query(query, (err, res) => {
    if (err) {
      return console.error("Error executing query", err.stack);
    }
  });

  res.json(editedCuostmer);
};

module.exports = {
  getAllCustomers: getAllCustomers,
  getCustomerById: getCustomerById,
  addCustomer: addCustomer,
  deleteCoustmer: deleteCoustmer,
  updateCoustmer: updateCoustmer,
};
