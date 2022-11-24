
export const age = (planet, ageSec) => {
  const secEarth = 31557600;
  const agePlanet = (age) => {
    switch (age) {
      case "earth":
        return 1;
      case "mercury":
        return 0.2408467;
      case "venus":
        return 0.61519726;
      case "mars":
        return 1.8808158;
      case "jupiter":
        return 11.862615;
      case "saturn":
        return 29.447498;
      case "uranus":
        return 84.016846;
      case "neptune":
        return 164.79132;
    }
  };
  return parseFloat((ageSec / secEarth / agePlanet(planet)).toFixed(2));
};
age("earth", 1000000000);
