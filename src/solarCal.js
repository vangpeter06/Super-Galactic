export default class SolarCal {
  constructor(age) {
  this.age = age;
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

};