//PROBLEM:

//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

//Given data of the problem
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//Tips on the mindset needed for approaching the problem:
// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute the max and min temperatures?
// - What's a sensor error? And what to do when one occurs?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array.
// - Find min value in temp array.
// - Subtract min from max (amplitude) and return it.

//Calculate Temperate Amplitude
const calcTempAmplitude = function (temps) {
  //Set a variable for min-max temp
  //First data of the given will be the min and max
  let max = temps[0];
  let min = temps[0];

  //For loop for getting the current temperature in the array, 1 by 1.
  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i]; // Setting the current temperature for comparison later
    if (typeof curTemp !== 'number') continue; //Don't get temperature data if it's not a number.

    //Compare the current temperature here to identify whether it's a min or max.
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min; //Formula for getting Temperature Amplitude
};

//Insert given temp data here, then input to the function
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
