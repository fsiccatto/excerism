
export const isIsogram = (string) => {
  string = string.toLowerCase().split("").filter((letter) => letter != " " && letter != "-");
  return (new Set(string)).size === string.length;
};

console.log(isIsogram('isogram'));
console.log(isIsogram('eleven'));
console.log(isIsogram('zzyzx'));
console.log(isIsogram('thumbscrew-japingly'));
console.log(isIsogram('six-year-old'))

