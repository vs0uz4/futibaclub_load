'use strict'

const initConfig = require('./initConfig')
const initUsers = require('./initUsers')
const initGroups = require('./initGroups')
const initGames = require('./initGames')
const initGroupsUsers = require('./initGroupsUsers')
const initGuessings = require('./initGuessings')

const errorHandler = (err) => {
  console.error(err.code)
}

const resultHandler = (res, records, table) => {
  console.log(`${res.length}/${records} ${table} Initialized`)
}

initUsers(initConfig)
  .then(res => {
    resultHandler(res, initConfig.userRecords, 'Users')
  })
  .catch(err => {
    errorHandler(err)
  })

initGroups(initConfig)
  .then(res => {
    resultHandler(res, initConfig.groupRecords, 'Groups')
  })
  .catch(err => {
    errorHandler(err)
  })

initGames(initConfig)
  .then(res => {
    resultHandler(res, initConfig.gameRecords, 'Games')
  })
  .catch(err => {
    errorHandler(err)
  })

initGroupsUsers(initConfig)
  .then(res => {
    resultHandler(res, initConfig.groupsUsersRecords, 'Group of Users')
  })
  .catch(err => {
    errorHandler(err)
  })

initGuessings(initConfig)
  .then(res => {
    resultHandler(res, initConfig.guessingsRecords, 'Guessings')
  })
  .catch(err => {
    errorHandler(err)
  })
