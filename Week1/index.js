// const http = require('http');
// // let a=()=>{

// // }

// http.createServer((req,res)=>{
//     res.write('<h1> Welcome to the world </h1>');
//     res.end();
// }).listen(8081);

// Imports
const express = require('express');
const morgan = require('morgan');

//App Initialization
const app = express ();

// First Route

app.get('/', (req,res)=>{
    res.json({message: "Welcome to the class"})
});

app.listen('8081');