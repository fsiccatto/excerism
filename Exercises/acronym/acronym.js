
export const parse = (string) => {
  const reg = /[a-z']+/gi;
  return string.match(reg).reduce((acronym, word) => acronym += word.charAt(0).toUpperCase(), '')
};