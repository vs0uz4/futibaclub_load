'use strict'

const { query } = require('./mysql/query')
const faker = require('faker')

const init = async (config) => {
  // Initializing load of groups_users table
  let batch = []
  for (let i = 0; i < config.groupsUsersRecords; i++) {
    // Generate fake data of groups_users
    const groupUser = {
      group_id: faker.random.number({
        min: 1,
        max: config.groupRecords
      }),
      user_id: faker.random.number({
        min: 1,
        max: config.userRecords
      }),
      role: faker.random.arrayElement(['owner', 'user', 'pending'])
    }

    batch.push(query('INSERT INTO groups_users SET ?', groupUser))
  }
  const results = await Promise.all(batch)
  return results
}

module.exports = init
