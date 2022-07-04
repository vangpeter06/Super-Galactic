import Expectancy from "../src/expectancy.js"

describe ('Expectancy', () => {
  let expectancyTest;
  beforeEach(() => {
    let region = "Americas";
    let gender = "female";
    let alcohol = "barely";
    let exercise = "yes";
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
    expect(expectancyTest.exerciseCal()).toEqual(100)
  });



})