const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3080;

const users = [];

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  res.json(users);
  console.log("get called")
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
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