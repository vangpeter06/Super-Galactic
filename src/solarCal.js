export default function SolarCal(age) {
  this.age = age;
  
}

SolarCal.prototype.earthCal = function() {
  let earthAge = this.age;
  return earthAge;
}
