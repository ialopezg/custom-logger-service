export const padding = (text: string, keys?: string[]): string => {
  let length = 0;
  let padding = '';

  if (!keys || keys.length <= 0) {
    keys = [text];
  }

  for (const key in keys) {
    if ({}.hasOwnProperty.call(keys, key)) {
      length = length < keys[key].length ? keys[key].length : length;
    }
  }
  for (let i = 0; i < length - text.length; i++) {
    padding += ' ';
  }

  return `${text}${padding}`;
};
