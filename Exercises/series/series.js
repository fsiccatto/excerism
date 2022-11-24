

export class Series {
  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    if (this.series.length == 0) throw new Error ('series cannot be empty')
    if (sliceLength > this.series.length) throw new Error ('slice length cannot be greater than series length');
    if (sliceLength === 0) throw new Error ('slice length cannot be zero');
    if (sliceLength < 0) throw new Error ('slice length cannot be negative');

    let arrSlices = [];
    let serie = parseInt(this.series.split(""));
    serie;

    for (let i = 0; i < this.series.length; i++) {
      arrSlices[i] = this.series.split("").slice(i, sliceLength + i);
    }

    return arrSlices
      .map((array) => array.map((num) => parseInt(num)))
      .filter((array) => array.length === sliceLength);
  }
}

