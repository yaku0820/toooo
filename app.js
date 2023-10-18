const { constants } = require("buffer");
const express = require("express");
const fs = require("fs/promises");
const path = require('path');
const { send } = require("process");
const {GetStudents, PostStudents,PutStudents,DeleteStudents} = require('./data');
const mySql = require('mysql2')
const app = express();
app.use(express.json())
app.use('/public',express.static('public'))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'))
})

// GET POST PUT DELETE //crud
app.get('/students',async(req,res)=>{
  const students = await GetStudents()
  res.send(students)
})
app.post('/students',async(req,res)=>{
  const data = await PostStudents(req.body)
  res.send(data)
})

app.listen(3005, async ()=>{
  console.log("server listen 3005port")
})






















