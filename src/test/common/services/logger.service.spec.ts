const { LoggerService } = require("../../../common");

describe("LoggerService", () => {
  describe("Default configuration", () => {
    let logger: any;

    const config = {
      useAppName: true,
      useContext: true,
      useFormat: true,
      useEvent: true,
      usePID: true,
      useTimestamp: true,
      usePadding: true,
    };

    beforeAll(() => {
      logger = new LoggerService();
    });

    it("should  setup a logger instance with default options", () => {
      expect(logger["_options"]).toStrictEqual(config);
      expect(config).toMatchSnapshot();
    });
  });

  describe("Custom configuration", () => {
    let logger: any;

    const config = Object.assign({
      useAppName: "TestApp",
    });

    beforeAll(() => {
      logger = new LoggerService(config);
    });

    it("should setup a logger instance with custom options", () => {
      expect(logger["_options"]).toStrictEqual({
        ...config,
        useContext: true,
        useFormat: true,
        useEvent: true,
        usePID: true,
        useTimestamp: true,
        usePadding: true,
      });
      expect(config).toMatchSnapshot();
    });
  });

  describe("Event log messages", () => {
    let logger: any;

    const config = Object.assign({
      useAppName: "TestApp",
      useContext: "TestLoader",
    });

    beforeAll(() => {
      logger = new LoggerService(config);
    });

    it("should print a debug message with gray color", () => {
      const spy = jest.spyOn(logger, "debug").mockImplementation(() => {});

      const message = "Console Debug testing message";
      logger.debug(message);

      expect(logger.debug).toBeCalled();
      expect(spy.mock.calls[0][0]).toContain(message);
      expect(true).toMatchSnapshot();

      spy.mockRestore();
    });

    it("should print an error message with red color", () => {
      const spy = jest.spyOn(logger, "error").mockImplementation(() => {});

      const message = "Console Error testing message";
      logger.error(message);

      expect(logger.error).toBeCalled();
      expect(spy.mock.calls[0][0]).toContain(message);
      expect(spy.mock.calls[0][0]).toMatchSnapshot();

      spy.mockRestore();
    });

    it("should print an info message with green color", () => {
      const spy = jest.spyOn(logger, "info").mockImplementation(() => {});

      const message = "Console Info testing message";
      logger.info(message);

      expect(logger.info).toBeCalled();
      expect(spy.mock.calls[0][0]).toContain(message);
      expect(spy.mock.calls[0][0]).toMatchSnapshot();

      spy.mockRestore();
    });

    it("should print a warning message with yellow color", () => {
      const spy = jest.spyOn(logger, "warn").mockImplementation(() => {});

      const message = "Console Warn testing message";
      logger.warn(message);

      expect(logger.warn).toBeCalled();
      expect(spy.mock.calls[0][0]).toContain(message);
      expect(spy.mock.calls[0][0]).toMatchSnapshot();

      spy.mockRestore();
    });

    it("should print a log message with grey color", () => {
      const spy = jest.spyOn(logger, "log").mockImplementation(() => {});

      const message = "Console Log testing message";
      logger.log(message);

      expect(logger.log).toBeCalled();
      expect(spy.mock.calls[0][0]).toContain(message);
      expect(true).toMatchSnapshot();

      spy.mockRestore();
    });
  });
});
