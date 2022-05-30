import { FormatOptions } from '../../../common/interfaces';

const { LoggerService } = require('../../../common');

describe('LoggerService', () => {
  const defaultConfig: FormatOptions = {
    useFormat: true,
    useAppName: true,
    usePID: true,
    useEvent: true,
    useTimestamp: true,
    useContext: true,
    usePadding: true,
  };

  describe('Default configuration', () => {
    it('should  setup a logger instance with default options', () => {
      const logger = new LoggerService();

      expect(logger['_options']).toStrictEqual(defaultConfig);
    });
  });

  describe('Custom configuration', () => {
    it('should setup a logger instance with no options nor format', () => {
      const config: FormatOptions = {
        useFormat: false,
      };
      const logger = new LoggerService(config);
      const message = 'Hello World!';

      logger.debug(message);
      logger.error(message);
      logger.info(message);
      logger.log(message);
      logger.warn(message);

      expect(logger['_options']).toStrictEqual(
        Object.assign(defaultConfig, config),
      );
    });

    it('should setup a logger instance with no options and default format', () => {
      const config: FormatOptions = {
        useFormat: true,
        useAppName: false,
        usePID: false,
        useContext: false,
        useEvent: false,
        useTimestamp: false,
        usePadding: false,
      };
      const logger = new LoggerService(config);
      const message = 'Hello World!';
      const spyLog = jest.spyOn(logger, '_logMessage');

      logger.debug(message);
      logger.error(message);
      logger.info(message);
      logger.log(message);
      logger.warn(message);

      expect(logger['_options']).toStrictEqual(
        Object.assign(defaultConfig, config),
      );
      expect(spyLog).toHaveBeenCalledTimes(5);
    });

    it('should setup a logger instance with all default format options', () => {
      const config: FormatOptions = Object.assign(defaultConfig, {
        useFormat: true,
        useAppName: 'APP',
        usePID: true,
        useEvent: true,
        useTimestamp: true,
        useContext: 'TestLoader',
        usePadding: true,
      });

      const logger = new LoggerService(config);
      const message = 'Hello World!';
      const spyLog = jest.spyOn(logger, '_logMessage');

      logger.debug(message);
      logger.error(message);
      logger.info(message);
      logger.log(message);
      logger.warn(message);

      expect(logger['_options']).toStrictEqual(
        Object.assign(defaultConfig, config),
      );
      expect(spyLog).toHaveBeenCalledTimes(5);
    });

    it('should setup a logger instance with custom format', () => {
      const config: FormatOptions = Object.assign(defaultConfig, {
        useFormat: '[%app%] %pid% - %event% %timestamp% - %context% %message%',
      });

      const logger = new LoggerService(config);
      const message = 'Hello World!';
      const spyLog = jest.spyOn(logger, '_logMessage');

      logger.debug(message);
      logger.error(message);
      logger.info(message);
      logger.log(message);
      logger.warn(message);

      expect(logger['_options']).toStrictEqual(
        Object.assign(defaultConfig, config),
      );
      expect(spyLog).toHaveBeenCalledTimes(5);
    });

    it('should setup a logger instance with PID - No AppName', () => {
      const config: FormatOptions = Object.assign(defaultConfig, {
        useFormat: true,
        useAppName: false,
        usePID: true,
        useEvent: true,
        useTimestamp: true,
        useContext: 'TestLoader',
        usePadding: true,
      });

      const logger = new LoggerService(config);
      const message = 'Hello World!';
      const spyLog = jest.spyOn(logger, '_logMessage');

      logger.debug(message);
      logger.error(message);
      logger.info(message);
      logger.log(message);
      logger.warn(message);

      expect(logger['_options']).toStrictEqual(
        Object.assign(defaultConfig, config),
      );
      expect(spyLog).toHaveBeenCalledTimes(5);
    });

    it('should setup a logger instance with AppName - no PID - no Context', () => {
      const config: FormatOptions = Object.assign(defaultConfig, {
        useFormat: true,
        useAppName: true,
        usePID: false,
        useEvent: true,
        useTimestamp: true,
        useContext: true,
        usePadding: true,
      });

      const logger = new LoggerService(config);
      const message = 'Hello World!';
      const spyLog = jest.spyOn(logger, '_logMessage');

      logger.debug(message);
      logger.error(message);
      logger.info(message);
      logger.log(message);
      logger.warn(message);

      expect(logger['_options']).toStrictEqual(
        Object.assign(defaultConfig, config),
      );
      expect(spyLog).toHaveBeenCalledTimes(5);
    });
  });
});
