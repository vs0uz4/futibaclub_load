'use strict'

const { query } = require('./mysql/query')
const faker = require('faker')

const init = async (config) => {
  // Initializing load of groups table
  let batch = []
  for (let i = 0; i < config.groupRecords; i++) {
    // Generate fake data of groups
    const group = {
      name: faker.commerce.department()
    }

    batch.push(query('INSERT INTO groups SET ?', group))
  }
  const results = await Promise.all(batch)
  return results
}

module.exports = init
