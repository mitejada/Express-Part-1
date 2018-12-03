const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.sendFile(__dirname)
})

app.get('/api/:userChoice', (req, res) => {

  const choice =[
    {"user":"rock","ai":"paper","result":"lose"},
    {"user":"rock","ai":"scissors","result":"win"},
    {"user":"rock","ai":"rock","result":"tie"}
  ]

  let userChoice = req.params.userChoice
  let ai = ['rock', 'paper', 'scissors']
  let aiChoice = ai[Math.floor(Math.random() * 3)]

  if(userChoice === 'rock' && aiChoice === 'rock') {
    res.send({"user":"rock","ai":"rock","result":"tie"})
  }else if(userChoice === 'rock' && aiChoice === 'paper') {
    res.send({"user":"rock","ai":"paper","result":"lose"})
  }else if(userChoice === 'rock' && aiChoice === 'scissors') {
    res.send({"user":"rock","ai":"scissors","result":"win"})
  }else if(userChoice === 'paper' && aiChoice === 'paper') {
    res.send({"user":"paper","ai":"paper","result":"tie"})
  }else if(userChoice === 'paper' && aiChoice === 'scissors') {
    res.send({"user":"paper","ai":"scissors","result":"lose"})
  }else if(userChoice === 'paper' && aiChoice === 'rock') {
    res.send({"user":"paper","ai":"rock","result":"win"})
  }else if(userChoice === 'scissors' && aiChoice === 'scissors') {
    res.send({"user":"scissors","ai":"scissors","result":"tie"})
  }else if(userChoice === 'scissors' && aiChoice === 'paper') {
    res.send({"user":"scissors","ai":"paper","result":"win"})
  }else if(userChoice === 'scissors' && aiChoice === 'rock') {
    res.send({"user":"scissors","ai":"rock","result":"lose"})
  }
  else {
    res.json('app wont load idk')
  }


})

app.get('/api/:user', (req, res) => {
  const paper = [
    {"user":"paper","ai":"paper","result":"tie"},
    {"user":"paper","ai":"scissors","result":"lose"},
    {"user":"paper","ai":"rock","result":"win"}
  ]
  res.send(req.params.user)
})

app.get('/api/:user', (req, res) => {
  const scissors = [
    {"user":"scissors","ai":"paper","result":"win"},
    {"user":"scissors","ai":"scissors","result":"tie"},
    {"user":"scissors","ai":"rock","result":"lose"}
  ]

  res.send(req.params.user)
})


app.listen(3000, () => {
  console.log('You are listening to port 3000');
})
