const express = require ('express')
const app = express()


app.get('/:operator/:num1/:num2', (req, res) => {
  let num1 = parseInt(req.params.num1)
  let num2 = parseInt(req.params.num2)

  if(isNaN(num1) || isNaN(num2)) {
    res.send('Please type a number!')
  }

  let operator = req.params.operator
  if(operator === '+') {
    res.send({num1: num1, num2: num2, result: num1 + num2})
  }else if(operator === '-'){
    res.send({num1: num1, num2: num2, result: num1 - num2})
  }else if(operator === '*') {
    res.send({num1: num1, num2: num2, result: num1 * num2})
  }else if(operator === '/') {
    res.send({num1: num1, num2: num2, result: num1 / num2})
  }else {
    res.json('operator not valid')
  }

})

app.listen(3000, () => {
  console.log('You are listening to port 3000');
})
