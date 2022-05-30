export const padding = (text: string): string => {
  let length = 0;
  let padding = "";
  const keys = ["debug", "error", "info", "log", "warn"];

  for (const key in keys) {
    if (keys.hasOwnProperty(key)) {
      length = length < keys[key].length ? keys[key].length : length;
    }
  }
  for (let i = 0; i < length - text.length; i++) {
    padding += " ";
  }

  return `${text}${padding}`;
};
