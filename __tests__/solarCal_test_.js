import SolarCal from "../src/solarCal.js"


describe ('SolarCal', () => {
let newTest;
beforeEach(() => {
  let age = 34;
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

test("should return number years past lives life expectancy if current age exceeds average life expectancy and years you lived beyond", () => {
  expect(newTest.yearsYouLived()).toEqual(`You have 43 years left to reach the average life expectancy`);
});
});

describe ('SolarCal', () => {
  let newTest;
  test("should return number years past lives life expectancy if current age exceeds average life expectancy and years you lived beyond", () => {
    let age = 88;
    let expectancy = 77;
    newTest = new SolarCal(age, expectancy)
    expect(newTest.yearsYouLived()).toEqual(`You have lived 11 years beyond average life expectancy`);
  });

  test("should return number years past lives life expectancy if current age exceeds average life expectancy and years you lived beyond", () => {
    let age = 77;
    let expectancy = 77;
    newTest = new SolarCal(age, expectancy)
    expect(newTest.yearsYouLived()).toEqual(`You have reach the life expectancy on earth`);
  });
    
})

