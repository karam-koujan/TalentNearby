const supertest = require("supertest");

beforeEach((done) => {
    mongoose.connect(dbConnection,
      () => done());
  });

test("get profile data",)
  afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done())
    });
  });

