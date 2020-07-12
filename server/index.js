const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const session = require('express-session')
const KnexSessionStore = require("connect-session-knex")(session)
const db = require('../data/config')
const Users = require('../users')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())
server.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "dicknipple",
    store: new KnexSessionStore({
        knex: db,
        createtable: true
    })
}))

server.use(Users.router)

server.use((err, req, res, next) => {
    console.log(err)

    res.status(500).json({
        message: "Something went wrong"
    })
})

server.get('/', (req, res) => {
    return res.status(200).send("/")
})

module.exports = server