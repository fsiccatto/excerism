
export class List {
  constructor(values = []) {
    this.values = values;
  }

  append(list) {
    return [...this.values, ...list]
  }

  concat(listOfLists) {
    const newList = [...this.values, listOfLists.flat(Infinity)].flat(Infinity);
    return newList;
  }

  filter(predicate) {
    const filtered = []
    this.values.forEach(value => {
      if (predicate(value)) filtered.push(value);
    });
    this.values = filtered;
    return this;
  }

  map(func) {
    let mapped = [];
    this.values.forEach((value) => {
      mapped.push(func(value))
    });
    this.values = mapped;
    return this;
  }

  length() {
    return this.values.reduce((el, index) => index++, 0)
  }

  foldl(func, initial) {
    const accumulator = initial;
    this.values.forEach(value => {
      accumulator = func(accumulator, value);
    })
    return accumulator;
  }

  foldr(func, initial) {
    const accumulator = initial;
    for(let i = this.length() - 1; i >= 0; i--) {
      const value = this.values[i];
      accumulator = func(accumulator, value);
    }
    return accumulator;
  }

  reverse() {
    const reversed = [];
    for (let i = this.length() - 1; i >= 0; i--) {
      reversed.push(this.values[i]);
    }
    return reversed;
  }
}

const newList = new List([1, 2, 3]);
console.log(newList.append([4, 5, 6]));
console.log(newList.reverse());