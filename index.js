const express = require("express");
const cors = require('cors')
const dotenv = require('dotenv')
const dataRoute = require('./routes/dataRoute')
const connectDB = require('./config/database')


const app = express();

app.use(cors()) 
app.use(express.json());


dotenv.config();

connectDB();

app.use("/api", dataRoute)


app.get('/',(req,res) =>{
    res.send("api is running")
})


app.listen(5000, () =>
  console.log("server running => http://localhost:5000")
);
