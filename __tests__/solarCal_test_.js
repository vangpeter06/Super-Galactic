import SolarCal from "../src/solarCal.js"

describe ('SolarCal', () => {
let newTest;
beforeEach(() => {
  let age = 34;
  newTest = new SolarCal(age)
});

test("should return the age of Earth years", () => {
  expect(newTest.earthCal()).toEqual(34);
});


test("should return the age of Mercury years", () => {
  expect(newTest.mercuryCal()).toEqual(8);
});







});