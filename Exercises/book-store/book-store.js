
const DISCOUNT = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
};
const BOOK_COST = 800;
export const cost = (books) => {
  let total = 0;
  const subsets = [];
  while (books.length > 0) {
    const subset = [];
    for (let i = 0; i < books.length; i++) {
      const book = books[i];
      if (!subset.includes(book)) {
        subset.push(book);
        books.splice(i, 1);
        i--;
      }
    }
    subsets.push(subset);
  }
  for (let j = 0; j < subsets.length; j++) {
    for (let k = 0; k < subsets.length; k++) {
      if (subsets[j].length === 5 && subsets[k].length === 3) {
        subsets[k].push(subsets[j].pop());
      }
    }
  }
  subsets.forEach((subset) => {
    total += subset.length * (BOOK_COST - BOOK_COST * DISCOUNT[subset.length]);
  });
  return total;
};
