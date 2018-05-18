const express = require('express')

const app = express()
app.use(express.static('../'))

console.log('Server listening on http://127.0.0.1:2000')
app.listen(2000)
