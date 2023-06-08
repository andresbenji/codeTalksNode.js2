//ASYNC AWAIT
//async...await is a way of making functions asynchronous and make them return a promise

//async...await helps simplify the syntax and makes the code more readable by avoiding callback hell and promise chaining

const myPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello world!");
    }, 2000);
  });
};

//declare an async function with the keyword async
//inside our async function we use the await operator to pause execution of our function until myPromise is resolved
//await returns the resolved value of myPromise and stores into our variable

async function myFunction() {
  let value = await myPromise();
  console.log(value);
}

myFunction();
