require("dotenv").config({ path: __dirname + "./../.env" });

const express = require("express");
const massive = require("massive");
const session = require("express-session"); //us for expression

//controllers
const td = require("./controllers/toDoController");
const uc = require('./controllers/userController')

//require controllers

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;
const app = express();

app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    saveUninitialized: true,
    resave: false
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("Database connected");
});

//endpoints
app.post('/api/signup', uc.signup)
app.post('/api/login', uc.login)
app.delete('/api/logout', uc.logout)


app.get("api/getToDo", td.getToDo);

app.listen(SERVER_PORT, () =>
  console.log(`this server... it's over ${SERVER_PORT}`)
);
