import SolarCal from "../src/solarCal.js"

describe ('SolarCal', () => {
let newTest;
beforeEach(() => {
  let age = 84;
  let expectancy = 77;
  newTest = new SolarCal(age, expectancy)
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
  expect(newTest.expectancyCal()).toEqual(43);
});

test("should return number years past lives life expectancy if current age exceeds average life expectancy", () => {
  expect(newTest.yearsExpectancy()).toEqual("You have lived 7 years beyond average life expectancy");
});

});