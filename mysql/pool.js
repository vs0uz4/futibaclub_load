'use strict'

const mysql = require('mysql')
const config = require('./config')

const pool = mysql.createPool(
  Object.assign(config, {
    connectionLimit: 10,
    multipleStatements: true
  })
)

module.exports = pool
