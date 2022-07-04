import SolarCal from "../src/solarCal.js"

describe ('SolarCal', () => {
let newTest;
beforeEach(() => {
  let age = 34;
  newTest = new SolarCal(age)
  let expectancy = 77;
});

test("should return the age of Earth years", () => {
  expect(newTest.earthCal()).toEqual(34);
});


test("should return the age of Mercury years", () => {
  expect(newTest.mercuryCal()).toEqual(8);
});

test("should return the age of Venus years", () => {
  expect(newTest.venusCal()).toEqual(21);
});

test("should return the age of Mars years", () => {
  expect(newTest.marsCal()).toEqual(64);
});

test("should return the age of Jupiter years", () => {
  expect(newTest.jupiterCal()).toEqual(403);
});

test("should return the age years left to live", () => {
  expect(newTest.expectancy()).toEqual(43);
});

});