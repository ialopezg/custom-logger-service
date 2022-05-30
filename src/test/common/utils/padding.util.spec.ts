import { padding } from '../../../common/utils';
import { LogLevel } from '../../../common/enums';

describe('Utilities', () => {
  describe('Padding', () => {
    const paddingFn = jest.fn();

    it('should add space to right to a text when keys to be compare are provided', () => {
      const keys = Object.keys(LogLevel);
      const output = padding(
        Object.values(LogLevel)[LogLevel.DEBUG].toString(),
        keys,
      );
      const lenght = output.length;

      expect(
        padding(Object.values(LogLevel)[LogLevel.DEBUG].toString(), keys),
      ).toEqual(output);
      expect(
        padding(Object.values(LogLevel)[LogLevel.DEBUG].toString(), keys)
          .length,
      ).toEqual(lenght);
      expect(
        padding(Object.values(LogLevel)[LogLevel.ERROR].toString(), keys)
          .length,
      ).toEqual(lenght);
      expect(
        padding(Object.values(LogLevel)[LogLevel.INFO].toString(), keys).length,
      ).toEqual(lenght);
      expect(
        padding(Object.values(LogLevel)[LogLevel.LOG].toString(), keys).length,
      ).toEqual(lenght);
      expect(
        padding(Object.values(LogLevel)[LogLevel.WARN].toString(), keys).length,
      ).toEqual(lenght);
    });

    it('should a text without padding when no keys to compare are provided', () => {
      const output = Object.values(LogLevel)[LogLevel.DEBUG].toString();
      const lenght = output.length;

      expect(padding(output).length).toEqual(lenght);
    });
  });
});
