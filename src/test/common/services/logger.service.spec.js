var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var LoggerService = require('../../../common').LoggerService;
describe('LoggerService', function () {
    describe('Default configuration', function () {
        var logger;
        var config = {
            useAppName: true,
            useContext: true,
            useFormat: true,
            useEvent: true,
            usePID: true,
            useTimestamp: true,
            usePadding: true
        };
        beforeAll(function () {
            logger = new LoggerService();
        });
        it('should  setup a logger instance with default options', function () {
            expect(logger['_options']).toStrictEqual(config);
            expect(config).toMatchSnapshot();
        });
    });
    describe('Custom configuration', function () {
        var logger;
        var config = Object.assign({
            useAppName: 'TestApp'
        });
        beforeAll(function () {
            logger = new LoggerService(config);
        });
        it('should setup a logger instance with custom options', function () {
            expect(logger['_options']).toStrictEqual(__assign(__assign({}, config), { useContext: true, useFormat: true, useEvent: true, usePID: true, useTimestamp: true, usePadding: true }));
            expect(config).toMatchSnapshot();
        });
    });
    describe('Event log messages', function () {
        var logger;
        var config = Object.assign({
            useAppName: 'TestApp',
            useContext: 'TestLoader'
        });
        beforeAll(function () {
            logger = new LoggerService(config);
        });
        it('should print a debug message with gray color', function () {
            var spy = jest.spyOn(logger, 'debug').mockImplementation(function () { });
            var message = 'Console Debug testing message';
            logger.debug(message);
            expect(logger.debug).toBeCalled();
            expect(spy.mock.calls[0][0]).toContain(message);
            expect(true).toMatchSnapshot();
            spy.mockRestore();
        });
        it('should print an error message with red color', function () {
            var spy = jest.spyOn(logger, 'error').mockImplementation(function () { });
            var message = 'Console Error testing message';
            logger.error(message);
            expect(logger.error).toBeCalled();
            expect(spy.mock.calls[0][0]).toContain(message);
            expect(spy.mock.calls[0][0]).toMatchSnapshot();
            spy.mockRestore();
        });
        it('should print an info message with green color', function () {
            var spy = jest.spyOn(logger, 'info').mockImplementation(function () { });
            var message = 'Console Info testing message';
            logger.info(message);
            expect(logger.info).toBeCalled();
            expect(spy.mock.calls[0][0]).toContain(message);
            expect(spy.mock.calls[0][0]).toMatchSnapshot();
            spy.mockRestore();
        });
        it('should print a warning message with yellow color', function () {
            var spy = jest.spyOn(logger, 'warn').mockImplementation(function () { });
            var message = 'Console Warn testing message';
            logger.warn(message);
            expect(logger.warn).toBeCalled();
            expect(spy.mock.calls[0][0]).toContain(message);
            expect(spy.mock.calls[0][0]).toMatchSnapshot();
            spy.mockRestore();
        });
        it('should print a log message with grey color', function () {
            var spy = jest.spyOn(logger, 'log').mockImplementation(function () { });
            var message = 'Console Log testing message';
            logger.log(message);
            expect(logger.log).toBeCalled();
            expect(spy.mock.calls[0][0]).toContain(message);
            expect(true).toMatchSnapshot();
            spy.mockRestore();
        });
    });
});
//# sourceMappingURL=logger.service.spec.js.map