//Arrow Functions in ES6

var logUpperCase = function() {
  this.string = this.string.toUpperCase();
  return () => console.log(this.string);
}

logUpperCase.call({string: 'es6 rocks' })();
