
const sounds = {
  3: "Pling",
  5: "Plang",
  7: "Plong",
}
export const convert = (num) => {
  /* let sound = "";
  if (num % 3 == 0) sound += "Pling";
  if (num % 5 == 0) sound += "Plang";
  if (num % 7 == 0) sound += "Plong"
  return sound ? sound : `${num}`; */
  return Object.entries(sounds).reduce((acc, [factor, sound]) => num % factor ? acc : acc + sound, '') || `${num}`;
};
