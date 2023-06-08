//a callback function is whenever you pass in a function into another function as an argument
//callback hell is whenever we nest multiple functions. This can be avoided by chaining promises instead. Callback hell can make it hard to debug and for other developers to understand what is going on.

//EXAMPLE
const makeBurger = () => {
  getBeef(function (beef) {
    cookBeef(beef, function (cookedBeef) {
      getBuns(function (buns) {
        putBeefBetweenBuns(buns, beef, function (burger) {});
      });
    });
  });
};
