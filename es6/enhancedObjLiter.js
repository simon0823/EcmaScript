//Enhanced Object Literals in ES6
//https://dev.to/sarah_chima/enhanced-object-literals-in-es6-a9d

function getLaptop(make, model, year) {
  return {
    make,
    model,
    year
  }
}

console.log(getLaptop("Apple", "MacBook", "2015"));
