import request from 'supertest';
import { app } from '../app';
import { User } from '../models/User.js';
import jwt from 'jsonwebtoken';
const bcrypt = require("bcryptjs")
import mongoose, { Model } from 'mongoose';
import dotenv from 'dotenv';
import Cookies from 'js-cookie';
import { response } from 'express';

dotenv.config();

beforeAll(async () => {
  const dbName = "testingDatabaseAuth";
  const url = `${process.env.MONGO_URI}/${dbName}`;

  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe('register', () => {
  beforeEach(async () => {
    await User.deleteMany({})
  });

  test('Successful case: should create a new user with status 200', (done) => {
    request(app)
      .post("/api/register")
      .send({
        username: 'test',
        email: 'test@example.com',
        password: 'password'
      })
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.data.message).toEqual("User registred successfully.")
        done();
      })
      .catch((err) => done(err));
  });

  test('Error 400: attribute missing', (done) => {
    request(app)
      .post("/api/register")
      .send({
        username: null,
        email: 'test@example.com',
        password: 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual("All attributes are required")
        done();
      })
      .catch((err) => done(err));
  });
  test('Error 400: attributes cannot be empty string', (done) => {
    request(app)
      .post("/api/register")
      .send({
        username: '   ',
        email: 'test@example.com',
        password: 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual( "Parameters cannot be empty")
        done();
      })
      .catch((err) => done(err));
  });

  test('Error 400: invalid mail format', (done) => {
    request(app)
      .post("/api/register")
      .send({
        username: 'test',
        email: 'tinvalid',
        password: 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Invalid email format")
        done();
      })
      .catch((err) => done(err));
  });

  test('Error 400: Email already taken', (done) => {
    
    User.create({
      username : "test",
      email : "test@email.com",
      password : "password"
    })

    request(app)
      .post("/api/register")
      .send({
        username: 'test1',
        email :  'test@email.com',
        password : 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Email/Username already registered")
        done();
      })
      .catch((err) => done(err));
  });

  test('Error 400: usrname already taken', (done) => {
    
    User.create({
      username : "test12",
      email : "test123@email.com",
      password : "password"
    }).then(() => {

    request(app)
      .post("/api/register")
      .send({
        username: 'test12',
        email :  'test1@email.com',
        password : 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Email/Username already registered")
        done();
      })
      .catch((err) => done(err));
    })
  });

  
  

  

});


describe("registerAdmin", () => { 
  beforeEach(async () => {
    await User.deleteMany({})
  });

  test('Successful case: should create a new admin with status 200', (done) => {
    request(app)
      .post("/api/admin")
      .send({
        username: 'test',
        email: 'test@example.com',
        password: 'password'
       
      })
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body.data.message).toEqual('Admin added succesfully')
        done();
      })
      .catch((err) => done(err));
  });

  test('Error 400: attribute missing', (done) => {
    request(app)
      .post("/api/admin")
      .send({
        username: null,
        email: 'test@example.com',
        password: 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual("All attributes are required")
        done();
      })
      .catch((err) => done(err));
  });
  test('Error 400: attributes cannot be empty string', (done) => {
    request(app)
      .post("/api/admin")
      .send({
        username: '   ',
        email: 'test@example.com',
        password: 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual( "Parameters cannot be empty")
        done();
      })
      .catch((err) => done(err));
  });

  test('Error 400: invalid mail format', (done) => {
    request(app)
      .post("/api/admin")
      .send({
        username: 'test',
        email: 'tinvalid',
        password: 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Invalid email format")
        done();
      })
      .catch((err) => done(err));
  });

  test('Error 400: Email already taken', (done) => {
    
    User.create({
      username : "test",
      email : "test@email.com",
      password : "password"
    }).then(()=> {

    request(app)
      .post("/api/admin")
      .send({
        username: 'test1',
        email :  'test@email.com',
        password : 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Email/Username already registered")
        done();
      })
      .catch((err) => done(err));
    })
  });

  test('Error 400: usrname already taken', (done) => {
    
    User.create({
      username : "test12",
      email : "test123@email.com",
      password : "password"
    }).then(() =>{

    request(app)
      .post("/api/admin")
      .send({
        username: 'test12',
        email :  'test1@email.com',
        password : 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Email/Username already registered")
        done();
      })
      .catch((err) => done(err));
    })
  });

  
})

describe('login', () => { 
  beforeEach(async () => {
    await User.deleteMany({})
  });
  
  test('Error 400: attribute missing', (done) => {
    request(app)
      .post("/api/login")
      .send({
        
        email: null,
        password: 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual("All attributes are required")
        done();
      })
      .catch((err) => done(err));
  });
  test('Error 400: attributes cannot be empty string', (done) => {
    request(app)
      .post("/api/login")
      .send({
        
        email: '   ',
        password: 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual( "Parameters cannot be empty")
        done();
      })
      .catch((err) => done(err));
  });

  test('Error 400: invalid mail format', (done) => {
    request(app)
      .post("/api/login")
      .send({
    
        email: 'tinvalid',
        password: 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual("Invalid email format")
        done();
      })
      .catch((err) => done(err));
  });

  test('Error 400 : user is not registred',(done) => {
    request(app)
      .post("/api/login")
      .send({
    
        email: 'nonExtistentusr@email.com',
        password: 'password'
      })
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.error).toEqual('please you need to register')
        done();
      })
      .catch((err) => done(err));

  })

  test('Error 400 : Wrong credentials',(done) => {
    bcrypt.hash("testPassword",12).then((hashedPassword) => {
      User.create({
        username: "tester",
              email: "tester@test.com",
              password: hashedPassword
      }).then(() => { 
        request(app)
        .post("/api/login")
        .send({
          email: "tester@test.com",
          password: "testPassword2222222"
        })
        .then((response) => {
          expect(response.status).toBe(400);
          expect(response.body.error).toEqual('wrong credentials');
          done();
        })
        .catch((err) => done(err));
      })
    })
  })
   
    
  
    test('Successful case: should login with status 200', (done) => {
      
      
      
      
      bcrypt.hash("testPassword",12).then((hashedPassword) => {
        User.create({
          username: "tester",
                email: "tester@test.com",
                password: hashedPassword
        }).then(() => { 
          request(app)
          .post("/api/login")
          .send({
            email: "tester@test.com",
            password: "testPassword"
          })
          .then((response) => {
            expect(response.status).toBe(200);
            
            expect(response.body).toHaveProperty('data');
            expect(response.body.data).toHaveProperty('accessToken');
            expect(response.body.data).toHaveProperty('refreshToken');
            done();
          })
          .catch((err) => done(err));
        })
      })
      
    });

  })

  describe('Logout', () => {
    beforeEach(async () => {
      await User.deleteMany({})
    });
    test('Successfull logout case: status 200',(done)=> {
      User.create({
        username: "test",
        email : "test@email.com",
        password : "password",
        refreshToken : "testRefreshToken"
      }).then(()=>{
        request(app)
          .get("/api/logout")
          .set("Cookie", `accessToken=testAccessToken;refreshToken=testRefreshToken`)
          .then((response) =>{
            expect(response.status).toBe(200)
            expect(response.body.data.message).toEqual('User logged out')
            done()

          })
          .catch((err) => done(err))
      })
    })

    test('Unsuccessfull log out case : error 400 : Refresh token not found',(done)=>{
      request(app)
      .get("/api/logout")
      //.set("Cookie",`accessToken=testAccessToken;refreshToken = ${null}`)
      .then((response) =>{
        expect(response.status).toBe(400)
        expect(response.body.error).toEqual("Refresh token not found");
        done()
      })
    .catch((err)=> done(err))
    })
    
    test('Unsuccessfull log out case: error 400: user not found',(done) =>{
      request(app)
      .get("/api/logout")
      .set("Cookie",`accessToken=testAccessToken;refreshToken = foo`)
      .then((response) =>{
        expect(response.status).toBe(400)
        expect(response.body.error).toEqual('User not found');
        done()
      })
    .catch((err)=> done(err))
    } )

  })