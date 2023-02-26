let ages = [3, 9, 23, 64, 2, 8, 28, 93];    //#1. 'let' is defining/creating the array called 'ages'
                                            // [] - the square brackets is used for a list (array)

function highestNumber (ages) {     //#1a. creating a new function called highestNumber + 'ages' is the parameter
    if (ages.length > 0) {          //using an 'if' statement to iterate for the whole length of the array
        let highNumber=ages[0];     //defining variable highNumber to equal the first element in the array
        for (let age of ages) {     //using a for loop to iterate every single number in the array
           if (age > highNumber) {
                highNumber = age;   //using an if statement to set the variable 'highNumber' to equal the (new) number (age) in the array, if it's greater than 
            }
        }
        return highNumber - ages[0]; //returning the (new) highNumber subtracted by 3 (first index)
    } else {
        return 0;                   //otherwise, return 0
    }
}
console.log(highestNumber(ages));   //console logging the function highestNumber with the argument 'ages'
ages.push(100);                     //1b. adding a new number by using the push method
console.log(highestNumber(ages));   //re-running the console log to test if the code is dynamic (can still work)

function average(ages) {            //#1c. creating new function called average with 'ages' as parameter
    let sum = 0;
    let count = ages.length;        //created 2 variables 'sum' starting off at 0 and count equalling the number of elements in the 'ages' array
    for (i=0; i < count; i++) {     // using 'for' loop, setting index to start from 0 and iterating until the index is lower than the count, and increment
      sum += ages[i];               //variable 'sum' is equal to 'sum' plus the numbers (elements) in the array
    }
    return sum/count;               //return the total divided by number of elements (numbers)
  }
  console.log(average(ages));       //output function average using the 'ages' array as the argument

  let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];  //#2. creating a new array called 'names'
  let lengths = names.map(function(element) {                   // defining variable 'lengths' to equal names' 
                                                                //map method (similar to a for loop, iterating every single element)
    return element.length;                                      //returning the total count of elements in the array
    });
    console.log(lengths)                        //console logging the variable 'lengths' which was defined as the map method / function

  function average(lengths) {                   //creating a new function 'average' with 'lengths' as the parameter
    let sum = 0;                                //defining variable 'sum' to equal (start) at 0
    let count = lengths.length;                 //defining variable 'count' to equal the 'length' of the lengths variable
    for (i=0; i < count; i++) {                 //a 'for loop' to start the index at 0, iterating until the 'i' is lower than the count
      sum += lengths[i];                        //var sum is equal to 'sum' itself plus elements within the lengths variable
    }
    return sum/count;                           //return sum divided by count

  }
  console.log(average(lengths));                //outputting the average function using lengths as the argument

  for (let name of names){                      //a for loop - for every 'name' (element within names), output the element + 'concatenate'
    console.log(name.concat());
  }

  //#3. variable[-1]
  //#4. variable[0]

  let nameLengths = []                          //#5. new array called 'nameLengths'

  for (length of lengths){                      //for loop - for every 'length' (element), iterate through lengths
    nameLengths.push(length);                   //using 'push' method to add every element
  }
  console.log(nameLengths);                     //outputting the new array

  function sum(nameLengths) {                   //#6. created a new function called 'sum' with 'nameLengths' (array) as param
    let sum = 0;
    for (i=0; i < nameLengths.length; i++) {    //defined var 'sum' equal to 0 (starting point) & used for loop to add all elements
      sum += nameLengths[i];
    }
    return sum;
}
console.log(sum(nameLengths));                  //after setting the return (output) equal the total, console logged the sum

let word = 'Hello';                             //variable 'word' defined as 'hello'

function repeat(word, n){                       //#7. created a function called 'repeat' with 2 params
    return(word.repeat(n));                     //using the repeat method with 'n' representing the number of times to repeat
}
console.log(repeat(word, 3));                   //output calling the repeat function

function fullName (firstName, lastName){        //#8. new function called 'fullName' with 2 params
    return firstName + " " + lastName;          //returning both params with a space in the middle
}
console.log(fullName('Tom', 'Sawyer'))          //output is Tom Sawyer

let testArray = [10, 23, 8, 28, 93];            //#9. created new array with random numbers and new var to start at 0
let testTotal = 0;

for (let i = 0; i < testArray.length; i++){     //for loop to add all the numbers in the array
    testTotal += testArray[i];
    }
console.log(testTotal);                         //output the total sum

function greaterThanHundred (testArray) {       //new function with for loop to add all the numbers in the array
    for (let num of testArray) {
        if (testTotal > 100) {                  //using if statement to return true if it's greater than 100 and false if not
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(greaterThanHundred(testArray));     //outputting by calling the function with the 'testArray' (array) in it

function secondAverage(testArray) {             //#10. very similar to question #1, created another new function with 'testArray' array
    let sum = 0;                                //set var 'sum' to start at 0 + var count to equal the number of elements in array
    let count = testArray.length;
    for (i=0; i < count; i++) {                 //using for loop to add all the elements 
      sum += testArray[i];
    }
    return sum/count;
  }
  console.log(secondAverage(testArray));        //returning the total divided by number of elements then outputting by calling function

  function greaterArray (array1, array2){       //#11. created new function called 'greaterArray' with 2 params. instead of creating
    if (array1>array2){                         //entirely new examples of arrays, used previously used ones (ages & testArray)
        return true;                            
    }                                           ////used if statements to return true or false based on higher or lower averages
    else {
        return false;
    }
}
console.log(greaterArray(average(ages),secondAverage(testArray)));  

function willBuyDrink (isHotOutside, moneyInPocket){        //#12. new function caleld willBuyDrink with 2 params
    if (isHotOutside == true && moneyInPocket > 10.50){     //if statement saying if first param is equal to true AND 'money' is greater
        return true;                                        //than 10.50, the output will be true
    }
    else {
        return false;
    }
}
console.log(willBuyDrink(true, 12));

function areYouStressed (isDoneWithAssignment, isThereErrors){      //#13. Created a funny function that have 2 (true or false) params
    if (isDoneWithAssignment == true && isThereErrors == false){    //if statements that is saying first param has to be true and 
        return('You deserve a break!')                              //second param has to be false in order to return first string. 
    }                                                               //otherwise, second string will be shown
    else {
        return("You're almost there!")
    }
}
console.log(areYouStressed(true, false));