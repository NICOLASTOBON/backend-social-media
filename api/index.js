const express = require('express')
const app = express()

// Configuration file
const config = require('../config')

const user = require('./componets/user/network')

// ROUTES
app.use('/api/users', user)

app.listen(config.api.port, () => console.log(`Api listening on port: http://localhost:${config.api.port}`))
