//We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

//Given data of the problem
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays?

//Modify function parameters to receive 2 inputs now (2 arrays)
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2); //Merge the 2 arrays
  console.log(temps);

  //Set the first element of the array as the min and max temp
  let max = temps[0];
  let min = temps[0];

  //For loop to read each element of the array and compare it to the current min and max temperature
  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    //Replace min or max depending on the current element of the array being read
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min; //Temperature Amplitude formula
};

//New syntax for using the function
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); //9 (Temp Amplitude)
