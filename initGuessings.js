'use strict'

const { query } = require('./mysql/query')
const faker = require('faker')

const init = async (config) => {
  // Initializing load of guessings table
  let batch = []
  for (let i = 0; i < config.guessingsRecords; i++) {
    // Generate fake data of guessings
    const guess = {
      group_id: faker.random.number({
        min: 1,
        max: config.groupRecords
      }),
      game_id: faker.random.number({
        min: 1,
        max: config.gameRecords
      }),
      user_id: faker.random.number({
        min: 1,
        max: config.userRecords
      }),
      result_a: faker.random.number({
        max: 5
      }),
      result_b: faker.random.number({
        max: 5
      }),
      score: faker.random.arrayElement([25, 50, 75, 100])
    }

    batch.push(query('INSERT INTO guessings SET ?', guess))
  }
  const results = await Promise.all(batch)
  return results
}

module.exports = init
