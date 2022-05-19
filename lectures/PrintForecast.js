/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
*/

/*
1.) Understanding the Problem
- How to display the array of temperatures?

2.) Breaking into sub-problems
- How to separate each array data for printing?
  - In each array data, create a string that will print the content according to the array position (number of days) and the actual value inside for temperature.

- How to display the number of days?
  - Identify the array length.

- How to construct the string based on the number of arrays?
  - Create a loop that will add each of the array content into the string.

*/

//Test Data - insert to variable
const forecastData1 = [17, 21, 23];
const forecastData2 = [12, 5, -5, 0, 4];

const printForecast = function (array) {
  let stringForecast = '... ';

  //For loop for displaying array elements
  for (let i = 0; i < array.length; i++) {
    //Concatenate each element into the string
    stringForecast = stringForecast.concat(
      `${array[i]}ºC in ${i + 1} days ... `
    );
  }

  return stringForecast;
};

console.log(printForecast(forecastData2));

// Jonas Schmedtmann implementation

// 1.) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1;

// 2.) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ... `);

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log('... ' + str);
// };

// printForecast(data1);

//0
// [2,3,4]
