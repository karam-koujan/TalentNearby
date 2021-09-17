const app = require("../index");
const mongoose = require("mongoose");
const supertest = require("supertest");
const {dbConnection} = require("../config/keys")
beforeEach((done) => {
    mongoose.connect(dbConnection,
      () => done());
  });
  


/*
  test("POST /api/auth/signup/freelancer",async()=>{
      const res = await  supertest(app).post("/api/auth/signup/freelancer").set("Content-type","application/json").send({
          "userName":"karama",
          "email":"karamds@gmail.com",
          "job":"developer",
          "address":"new york",
          "country":"usa",
          "longitude":"1239",
          "latitude":"4546",
          "password":"1234fsfsfdsfasdsf"
      }
      )
      expect(res.statusCode).toBe(201)
      expect(res.body.error).toBeFalsy()
      
  })

  test("POST /api/auth/signup/client",async()=>{
    const res = await  supertest(app).post("/api/auth/signup/client").set("Content-type","application/json").send({
        "userName":"abdo",
        "email":"karamds@gmail.com",
        "address":"new york",
        "country":"usa",
        "longitude":"1239",
        "latitude":"4546",
        "password":"1234fsfsfdsfasdsf"
    }
    )
    expect(res.statusCode).toBe(201)
    expect(res.body.error).toBeFalsy()
    
})

test("POST /api/auth/login/freelancer unverified email",async()=>{
    const res = await  supertest(app).post("/api/auth/login/freelancer").set("Content-type","application/json").send({
        "userName":"karama",
        "email":"karamds@gmail.com",
        "password":"1234fsfsfdsfasdsf"
    }
    )
    expect(res.statusCode).toBe(401)
    expect(res.body.error).toBeTruthy()
    
})

test("POST /api/auth/login/client unverified email",async()=>{
    const res = await  supertest(app).post("/api/auth/login/freelancer").set("Content-type","application/json").send({
        "userName":"abdo",
        "email":"karamds@gmail.com",
        "password":"1234fsfsfdsfasdsf"
    }
    )
    expect(res.statusCode).toBe(401)
    expect(res.body.error).toBeTruthy()
    
})

test("POST /api/auth/forgotPassword/sendResetPasswordCode",async()=>{
   const res = await  supertest(app).post("/api/auth/forgotPassword/sendResetPasswordCode").set("Content-type","application/json").send({
       "email":"karamdoskallas@gmail.com"
   })

   expect(res.statusCode).toBe(200)
   expect(res.body.error).toBeFalsy()
})

test("POST /api/auth/forgotPassword/codeVerification , an expired version",async()=>{
    const res = await  supertest(app).post("/api/auth/forgotPassword/codeVerification").set("Content-type","application/json").send({
        "email":"karamdoskallas@gmail.com",
        "code":708621
    })
     
        expect(res.statusCode).toBe(401)
        expect(res.body.error).toBeTruthy()
    
})
*/
/*
test("POST /api/auth/forgotPassword/codeVerification , a correct version",async()=>{
    const res = await  supertest(app).post("/api/auth/forgotPassword/codeVerification").set("Content-type","application/json").send({
        "email":"karamdoskallas@gmail.com",
        "code":970248
    })
     
        expect(res.statusCode).toBe(200)
        expect(res.body.error).toBeFalsy()
    
})
*/
test("POST /api/auth/forgotPassword/sendResetPasswordCode",async()=>{
    const res = await  supertest(app).post("/api/auth/forgotPassword/sendResetPasswordCode").set("Content-type","application/json").send({
        "email":"karamdoskallas@gmail.com"
    })
 
    expect(res.statusCode).toBe(401)
    expect(res.body.error).toBeTruthy()
 })



  afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done())
    });
  });