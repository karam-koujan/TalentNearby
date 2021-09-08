const app = require("./");
const mongoose = require("mongoose");
const supertest  = require("supertest");
const {dbConnection} = require("./config/keys");
beforeEach((done) => {
  mongoose.connect(dbConnection,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done());
});


test("test GET hi",async()=>{
 expect(1).tobe(1)
})
afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  });
});

