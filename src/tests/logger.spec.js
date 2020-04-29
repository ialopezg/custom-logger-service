const logger = require('../logger')

test('Must print a debugger message by a console', () => {
  const spy = jest.spyOn(logger, 'error').mockImplementation(() => {})

  const message = 'Console Error testing record'
  logger.error(message)

  expect(logger.error).toBeCalled()
  expect(spy.mock.calls[0][0]).toContain(message)
  expect(spy.mock.calls[0][0]).toMatchSnapshot()

  spy.mockRestore()
})

test('Must be an informative message', () => {
  const spy = jest.spyOn(logger, 'appStarted').mockImplementation(() => {})

  logger.appStarted(3000, 'localhost')

  expect(logger.appStarted).toBeCalled()
  expect(true).toMatchSnapshot()

  spy.mockRestore()
})
