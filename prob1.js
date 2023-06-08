//A promise is basically an object that is used as a placeholder for the future result of an asynchronous operation
//some pros of using promises is taht we no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results
//another one is that we can chanin promises for a sequence of async ooperations instead of nesting callbacks

//EXAMPLE
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

//this promise returns the resolve or reject value of myExecutor depending on the outcome
const orderSunglasses = (num) => {
  if (num > inventory.sunglasses) {
    return "not enough supply";
  }
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderSunglasses(19001));
