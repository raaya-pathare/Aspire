const routes = require('./routes')
const path = require('path')
const express = require('express')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use('/', routes)
server.use('/user/:id/addgoal', routes)

module.exports = server
