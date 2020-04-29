const chalk = require('chalk')
const ip = require('ip')

const divider = chalk.gray('\n-----------------------------------')
/**
 * Logger middleware, you can customize it to make messages more personal.
 *
 * @type {{appStarted: logger.appStarted, error: logger.error}}
 */
const logger = {
  /**
   * Called whenever there's an error on the server we want to print.
   *
   * @param err
   */
  error: err => {
    console.error(chalk.red(err))
  },

  appStarted: (port, host, tunnel) => {
    console.log(`Server started ! ${chalk.green('✓')}`)

    // If the tunnel started, log that and the URL it's available at
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
}

module.exports = logger
