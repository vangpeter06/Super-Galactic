export default class Expectancy {
  constructor(region, gender) {
  this.region = region;
  this.gender = gender;
  // this.alcohol = alcohol;
  // this.exercise = exercise;
  this.ageExpectancy = 0;
  }

  regionCal() {
    if (this.region === "Americas") {
      this.ageExpectancy = 79;
    } else if (this.region === "Asia") {
    this.ageExpectancy = 80;
    } else if (this.region === "Africa") {
      this.ageExpectancy = 74;
    } else if (this.region === "Europe") {
      this.ageExpectancy = 77;
    } else if (this.region === "South Americas") {
      this.ageExpectancy = 76;
    } else {
      this.ageExpectancy = 71;
    }
    return this.ageExpectancy;
  }

  genderCal() {
    if (this.gender === "female") {
      this.ageExpectancy += 5;
      return this.ageExpectancy;
    } else {
      return this.ageExpectancy;
    }
  }
}