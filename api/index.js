const express = require('express')
const app = express()

// Configuration file
const config = require('../config')

const user = require('./componets/user/network')
const auth = require('./componets/auth/network')


app.use(express.json());

// ROUTES
app.use('/api/users', user)
app.use('/api/auth', auth)


app.listen(config.api.port, () => console.log(`Api listening on port: http://localhost:${config.api.port}`))
