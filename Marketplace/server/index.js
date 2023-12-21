const express = require("express");
const cors =require ("cors")
const conn = require("../database-mysql");
const Route = require("./routes/route");
const bcrypt= require("bcrypt")
const jwt =require("jsonwebtoken")
const cookieparser=require("cookie-parser")
const saltRound=10

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//UNCOMMENT THIS LINE TO START
app.use(express.static(__dirname + "/../react-client/dist"));
app.use(cors({
  origin: ["http://localhost:3001"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(cookieparser())
app.use("/api/market", Route);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
