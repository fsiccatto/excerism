

export const toRna = (dna) => {
  const switchDna = dna => {
    switch (dna) {
      case 'G':
        return 'C';
      case 'C':
        return 'G';
      case 'T':
        return 'A';
      case 'A':
        return 'U';
      default:
        return '';
    }
  }
  return dna.split('').map(switchDna).join('');
};

toRna('C');
