const express = require('express')
const logger = require('custom-logger-service')

const app = express()

const port = 3000
const host = 'localhost'

app
  .listen(port, host, () => {
    logger.appStarted(port, host)
  })
  .on('error', err => {
    return logger.error(err.message)
  })
