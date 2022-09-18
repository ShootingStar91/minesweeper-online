const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.static('public'))

app.get('/', (req, res) => {
  return res.redirect('/game.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})