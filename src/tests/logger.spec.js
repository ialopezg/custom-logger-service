const logger = require('../logger')

it('Must setup configurations for a logger instance', () => {
  const spy = jest.spyOn(logger, 'config').mockImplementation(() => {})

  const config = Object.assign({
    level: 0,
    event: 'info',
    color: 'green'
  })
  logger.config(config)

  expect(logger.config).toBeCalled()
  expect(config).toMatchSnapshot()
})

it('Must print a debugger message by a console in grey color', () => {
  const spy = jest.spyOn(logger, 'debug').mockImplementation(() => {})

  const message = 'Console Debugging testing message'
  logger.debug(message)

  expect(logger.debug).toBeCalled()
  expect(spy.mock.calls[0][0]).toContain(message)
  expect(spy.mock.calls[0][0]).toMatchSnapshot()

  spy.mockRestore()
})

test('Must print a error message by a console in red color', () => {
  const spy = jest.spyOn(logger, 'error').mockImplementation(() => {})

  const message = 'Console Error testing message'
  logger.error(message)

  expect(logger.error).toBeCalled()
  expect(spy.mock.calls[0][0]).toContain(message)
  expect(spy.mock.calls[0][0]).toMatchSnapshot()

  spy.mockRestore()
})

it('Must print a info message by a console in green color', () => {
  const spy = jest.spyOn(logger, 'info').mockImplementation(() => {})

  const message = 'Console Informative testing message'
  logger.info(message)

  expect(logger.info).toBeCalled()
  expect(spy.mock.calls[0][0]).toContain(message)
  expect(spy.mock.calls[0][0]).toMatchSnapshot()

  spy.mockRestore()
})

it('Must print a warning message by a console in yellow color', () => {
  const spy = jest.spyOn(logger, 'warn').mockImplementation(() => {})

  const message = 'Console Error testing message'
  logger.warn(message)

  expect(logger.warn).toBeCalled()
  expect(spy.mock.calls[0][0]).toContain(message)
  expect(spy.mock.calls[0][0]).toMatchSnapshot()

  spy.mockRestore()
})

it('Must be an informative message', () => {
  const spy = jest.spyOn(logger, 'appStarted').mockImplementation(() => {})

  logger.appStarted(3000, 'localhost', true)

  expect(logger.appStarted).toBeCalled()
  expect(true).toMatchSnapshot()

  spy.mockRestore()
})
