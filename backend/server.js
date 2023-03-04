const { response } = require("express");
const express = require("express");

const app = express()

app.get("/",(req,res) => {
    res.send("API is running");
})

app.get("/",(req,res) =>{
    response.send("API is running");
} );

// app.get();

app.listen(5000,console.log("Server started on port 5000"));

