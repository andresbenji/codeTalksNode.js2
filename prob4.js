const numbers = [48, 20, 18, 7, 12, 9, 8, 10, 12, 96, 3, 36, 51];

//this functions uses the filter method
const filterNums = (arr) => {
  //use a callback function with the filter mthod that uses our parameters
  return arr.filter(
    (numero) => numero % 3 === 0 && numero % 6 === 0 && numero % 9 !== 0
  );
};

//we store the our new array into the result variable
const result = filterNums(numbers);
console.log(result);
