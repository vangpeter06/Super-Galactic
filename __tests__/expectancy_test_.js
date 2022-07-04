import Expectancy from "../src/expectancy.js"

describe ('Expectancy', () => {
  let expectancyTest;
  beforeEach(() => {
    let region = "Americas";
    let gender = "female";
    let alcohol = "barely";
    let exercise = "no";
    expectancyTest = new Expectancy(region, gender, alcohol, exercise);
  })

  test('should return life expectancy based on user input for region', ()=> {
    expect(expectancyTest.regionCal()).toEqual(79)
  });

  test('should return life expectancy based on user input for gender', ()=> {
    expectancyTest.regionCal();
    expect(expectancyTest.genderCal()).toEqual(84)
  });

  test('should return life expectancy based on user input for alcohol use', ()=> {
    expectancyTest.regionCal();
    expectancyTest.genderCal();
    expect(expectancyTest.alcoholCal()).toEqual(92)
  });

  test('should return life expectancy based on user input for exercising', ()=> {
    expectancyTest.regionCal();
    expectancyTest.genderCal();
    expectancyTest.alcoholCal();
    expect(expectancyTest.exerciseCal()).toEqual(92)
  });
})
describe ('Expectancy', () => {
  let expectancyTest;
  
  test('should return life expectancy based on user input for region', ()=> {
    let region = "Asia";
    expectancyTest = new Expectancy(region)
    expect(expectancyTest.regionCal()).toEqual(80)
  });

  test('should return life expectancy based on user input for region', ()=> {
    let region = "Africa";
    expectancyTest = new Expectancy(region)
    expect(expectancyTest.regionCal()).toEqual(74)
  });
  
  test('should return life expectancy based on user input for region', ()=> {
    let region = "Europe";
    expectancyTest = new Expectancy(region)
    expect(expectancyTest.regionCal()).toEqual(77)
  });

  test('should return life expectancy based on user input for region', ()=> {
    let region = "South Americas";
    expectancyTest = new Expectancy(region)
    expect(expectancyTest.regionCal()).toEqual(76)
  });

  test('should return life expectancy based on user input for region', ()=> {
    let region = "neither";
    expectancyTest = new Expectancy(region)
    expect(expectancyTest.regionCal()).toEqual(71)
  });
  
  test('should return life expectancy based on user input for gender', ()=> {
    
    let region = "Americas"
    let gender = "male";
    expectancyTest = new Expectancy(region, gender);
  expectancyTest.regionCal();
  expect(expectancyTest.genderCal()).toEqual(79)
});

test('should return life expectancy based on user input for alcohol use', ()=> {
  let region = "Americas"
  let gender = "male";
  let alcohol = "occasion";
    expectancyTest = new Expectancy(region, gender, alcohol);
  expectancyTest.regionCal();
  expectancyTest.genderCal();
  expect(expectancyTest.alcoholCal()).toEqual(83)
});

test('should return life expectancy based on user input for alcohol use', ()=> {
  let region = "Americas"
  let gender = "male";
  let alcohol = "always";
    expectancyTest = new Expectancy(region, gender, alcohol);
  expectancyTest.regionCal();
  expectancyTest.genderCal();
  expect(expectancyTest.alcoholCal()).toEqual(79)
});
});