export default class SolarCal {
  constructor(age, expectancy) {
  this.age = age;
  this.expectancy = expectancy;
  };

  earthCal() {
    let earthAge = this.age;
    return earthAge;
  };

  mercuryCal() {
    let mercuryAge = Math.round(this.age * .24)
    return mercuryAge;
  };

  venusCal() {
    let venusAge = Math.round(this.age * .62)
    return venusAge;
  };

  marsCal() {
    let marsAge = Math.round(this.age * 1.88)
    return marsAge;
  };

  jupiterCal() {
    let jupiterAge = Math.round(this.age * 11.86)
    return jupiterAge;
  };

  expectancyCal() {
    let expectancyAge = Math.round(this.expectancy - this.age)
    return expectancyAge;
  };
};