const express = require("express")


const dotenv = require("dotenv")
const app = express()
dotenv.config({path:"./config/config.env"})



 

const bootcamps = require("./routes/bootcamps")
app.use("/api/v1/bootcamps",bootcamps)
const PORT = process.env.PORT || 5000;


app.listen(PORT,console.log(`Server Running on ${process.env.NODE_ENV} MODE ON PORT ${PORT}`))