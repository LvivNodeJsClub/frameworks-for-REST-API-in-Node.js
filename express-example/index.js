const express = require('express')

const app = express()
const port = 3000

app.get('/hello/:user', (req, res) => res.send(`Hello ${req.params.user}!`))

app.get('/hello/', (req, res) => res.send(`Hello ${req.query.user}!`))

app.listen(port, () => console.log(`Example app listening on port${port}!`))
