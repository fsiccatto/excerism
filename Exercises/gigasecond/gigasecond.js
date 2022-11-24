
// A gigasecond is 10^9 (1,000,000,000) seconds.
export const gigasecond = (fecha) => {
  const GIGASECOND = 1000000000000; //ms
  const fechaGigasecond = new Date(fecha.getTime() + GIGASECOND);
  return fechaGigasecond;
};
