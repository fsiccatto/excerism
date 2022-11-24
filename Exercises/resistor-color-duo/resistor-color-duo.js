

export const decodedValue = (codeColors) => {
  const colors = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };
  const color1 = codeColors[0];
  const color2 = codeColors[1];
  return colors[color1] * 10 + colors[color2];
};
decodedValue(['brown', 'black']);
