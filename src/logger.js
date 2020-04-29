const util = require('util')
const dateFormat = require('dateformat')
const chalk = require('chalk')
const ip = require('ip')

const divider = chalk.gray('\n-----------------------------------')

var events = {}

var options = {
  level: 0,
  format: '%timestamp% - %event%:%padding%  %message%',
  timestamp: 'HH:MM:ss',
  messageFormatting: false
}

function logger (options) {
  this.event = options.event
  this.level = options.level || 0
  this.color = options.color || 'white'
}

logger.prototype.config = function (config) {
  for (var key in config) {
    this[key] = config[key]
  }
  return this
}

logger.prototype.__defineGetter__('padding', function () {
  var length = 0
  var padding = ''

  for (var key in events) {
    if (events.hasOwnProperty(key)) {
      length =
        length < events[key].event.length ? events[key].event.length : length
    }
  }
  for (var i = 0; i < length - this.event.length; i++) {
    padding += ' '
  }

  return padding
})

logger.prototype.output = function (input) {
  if (options.level > this.level) {
    return
  }
  var message = ''
  if (options.messageFormatting) {
    message = ' ' + util.format.apply(util, input)
  } else {
    for (var key in input) {
      message +=
        ' ' +
        (typeof input[key] === 'object'
          ? JSON.stringify(input[key], null)
          : input[key])
    }
  }
  var format = this.format || options.format
  var output = format
    .replace(
      '%timestamp%',
      dateFormat(new Date(), this.timestamp || options.timestamp)
    ) // timestamp
    .replace('%event%', chalk.keyword(this.color).bold(this.event)) // log event & color
    .replace('%padding%', this.padding)
    .replace('%message%', chalk.keyword(this.color)(message))

  console.log(output)
}

exports.config = function (config) {
  for (var key in config) {
    if (options.hasOwnProperty(key)) {
      options[key] = config[key]
    }
  }
  return this
}

exports.appStarted = function (port, host, tunnel) {
  console.log(`Server started ! ${chalk.green('✓')}`)

  // If the tunnel started, log the URL it's available at
  if (tunnel) {
    console.log(`Tunnel initialised ${chalk.green('✓')}`)
  }

  console.log(`
${chalk.bold('Access URLs:')}${divider}
Localhost: ${chalk.magenta(`http://${host}:${port}`)}
      LAN: ${chalk.magenta(`http://${ip.address()}:${port}`) +
        (tunnel ? `\n    Proxy: ${chalk.magenta(tunnel)}` : '')}${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
    `)
}

function nFn (e) {
  return function () {
    return arguments.length === 0 ? events[e] : events[e].output(arguments)
  }
}

exports.new = function (newEvents) {
  for (var event in newEvents) {
    events[event] = new logger(newEvents[event])
    this[event] = nFn(event)
  }

  return this
}

exports.new({
  debug: { level: 0, event: 'debug', color: 'grey' },
  error: { level: 1, event: 'error', color: 'red' },
  info: { level: 2, event: 'info', color: 'green' },
  warn: { level: 3, event: 'warn', color: 'yellow' }
})
