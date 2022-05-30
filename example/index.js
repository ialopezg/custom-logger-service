const { LoggerService } = require('custom-logger-service');

const logger = new LoggerService();

logger.log('Hello World!');
logger.error('Hello World!');
logger.info('Hello World!');
logger.warn('Hello World!');
