'use strict'

const { query } = require('./mysql/query')
const faker = require('faker')

const init = async (config) => {
  // Initializing load of users table
  let batch = []
  for (let i = 0; i < config.userRecords; i++) {
    // Generate fake data of users
    const user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      passwd: faker.internet.password(50),
      role: faker.random.arrayElement(['root', 'user'])
    }

    batch.push(query('INSERT INTO users SET ?', user))
  }
  const results = await Promise.all(batch)
  return results
}

module.exports = init
