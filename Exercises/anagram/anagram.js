

export const findAnagrams = (wordAnagram, anagrams) => {
  const wordAnagramSort = [...wordAnagram.toLowerCase()].sort().join("");
  return anagrams.filter(
    (word) =>
      word.toLowerCase() !== wordAnagram.toLowerCase() &&
      [...word.toLowerCase()].sort().join("") === wordAnagramSort
  );
};
