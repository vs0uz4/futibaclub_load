'use strict'

const { query } = require('./mysql/query')
const faker = require('faker')

const init = async (config) => {
  // Initializing load of games table
  let batch = []
  for (let i = 0; i < config.gameRecords; i++) {
    // Generate fake data of games
    const game = {
      team_a: faker.address.state(false),
      team_b: faker.address.state(false),
      result_a: faker.random.number({
        max: 5
      }),
      result_b: faker.random.number({
        max: 5
      })
    }

    batch.push(query('INSERT INTO games SET ?', game))
  }
  const results = await Promise.all(batch)
  return results
}

module.exports = init
