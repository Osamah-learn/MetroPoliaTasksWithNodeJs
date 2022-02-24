/* This is the code that is used to import the chai and chai-http modules. */
const chai = require("chai");
const chaihttp = require("chai-http");
const app = require("../server");
const should = chai.should();
chai.use(chaihttp);
/* This is a test coustmer object that will be used to test the POST /api/customers endpoint. */
const testCoustmer = {
  firstname: "Osamah",
  lastname: "Amer Mohammed",
  email: "test@test",
  phone: "1233123123123",
};
/* This code is testing the POST /api/customers endpoint. */

describe('/POST customers', () => {
    it('Add new Coustmer', (done) => {
      chai.request(app)
       .post('/api/customers/')
       .set('Content-Type', 'application/json')
       .send(JSON.stringify(testCoustmer))
       .end((err, res) => {
          
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('phone');
          done();
        });
    });
  });


/* This is a test code that is used to test the GET /api/customers endpoint. */
  describe('/GET customers', () => {
    it('Fetch all customers', (done) => {
      chai.request(app)
        .get('/api/customers')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(res.body.length);
          
          done();
      });
    });
  });