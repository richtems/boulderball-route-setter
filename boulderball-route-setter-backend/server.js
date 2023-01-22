const express = require('express');
const bodyParser = require("body-parser");
const { Sequelize, DataTypes  } = require('sequelize');
const { Console } = require('console');

const app = express();
const port = 3080;


const connection = require("./connection.json")
const sequelize = new Sequelize(connection)

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.')
}).catch((error) => {
  console.error('Unable to connect to the database:', error)
})

const User = sequelize.define("users", {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

sequelize.sync();

const users = [];

app.use(bodyParser.json());

app.get('/api/users', async (req, res) => {
  x = await User.findAll()
  res.json(x);
  //res.json(users);
  console.log("get called")
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
  User.create(user).then(res => {
    console.log(res)
  }).catch((error) => {
    console.error('Failed to create a new record : ', error);
  });
  console.log("user addedd")
});






app.get("/", (req, res) => res.send("Hello World!"));

app.get("/products", (req,res) => {
   const products = [
     {
       id: 1,
       name: "hammer",
     },
     {
       id: 2,
       name: "screwdriver",
     },
     ,
     {
       id: 3,
       name: "wrench",
     },
   ];

  res.json(products);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));