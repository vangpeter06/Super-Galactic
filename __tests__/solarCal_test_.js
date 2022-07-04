import SolarCal from "../src/solarCal.js"
import Expectancy from "../src/expectancy"

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

describe ('Expectancy', () => {
  let expectancyTest;
  beforeEach(() => {
    let region = "Amercias"
    expectancyTest = new Expectancy(region, gender, alcohol, exercise);
  })

  test('should return life expectancy based on user input for region', ()=> {
    expect(expectancyTest.regionCal).toEqual(79)
  })
})