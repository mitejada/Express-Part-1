const express = require ('express')
const app = express()


app.get('/add/:num1/:num2', (req, res) => {
  let num1 = parseInt(req.params.num1)
  let num2 = parseInt(req.params.num2)

  res.send({num1: num1, num2: num2, result: num1 + num2})
})

app.get('/subtract/:num1/:num2', (req, res) => {
  let num1 = parseInt(req.params.num1)
  let num2 = parseInt(req.params.num2)

  res.send({num1: num1, num2: num2, result: num1 - num2})
})

app.get('/multiply/:num1/:num2', (req, res) => {
  let num1 = parseInt(req.params.num1)
  let num2 = parseInt(req.params.num2)

  res.send({num1: num1, num2: num2, result: num1 * num2})
})

app.get('/divide/:num1/:num2', (req, res) => {
  let num1 = parseInt(req.params.num1)
  let num2 = parseInt(req.params.num2)

  res.send({num1: num1, num2: num2, result: num1 / num2})
})


app.listen(3000, () => {
  console.log('You are listening to port 3000');
})
