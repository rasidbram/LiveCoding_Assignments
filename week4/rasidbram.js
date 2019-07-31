// 1. Seconds to Minutes
// Create a function that accepts one argument (seconds) and converts it into minutes and seconds and returns back.

// Example input: (94)
// Example output: "1 minutes and 34 seconds"
function getTime(seconds) {
    if(seconds>=60){
      return Math.floor(seconds/60) + ' Minutes ' + seconds%60 +' Seconds';
    }
  
  if (seconds<60){
      return seconds+ ' Seconds';
    }
   
  }
  var result=getTime(94);
  console.log(result);
  

// 2. Print the written number with prefix
// Create a function that accepts one argument (number) and returns it as a string with 'Number is: " prefix.

// Example input: (22)
// Example output: "Number is: 22"
function getString(number){
    return number;
    }
    
    var result=getString(22);
    console.log('Number is: '+ result);
    
    
// 3. Remove the 2nd string from the 1th string
// Create a function that accepts two arguments(firstString, secondString) and removes the second string from the first string.

// Example input: ('I am a happy person.', 'person')
// Example output: "I am a happy ."
function removeWord(firstString,secondString ) {
  return firstString.replace(secondString,'.');
}

var result= removeWord('I am a happy person','person')
console.log(result);



// 4. Replace the 2nd string with the 3rd string
// Create a function that accepts two arguments(firstString, secondString, thirdString) and replaces the 2nd string with the 3rd one in the 1th string.

// Example input: ('I am a bad person.', 'bad', 'good')
// Example output: "I am a good person."
function replaceWord(firstString,secondString,thirdString) {
    return  firstString.replace(secondString,thirdString);
     }
   
   var result=replaceWord('I am a bad person','bad','good');
   console.log(result);
   
   
// 5. Return the closest bigger even number of the given number
// Create a function that accepts one argument(number) and returns the closest bigger even number of given number.

// Example input: (354)
// Example output: 356

// Example input: (23)
// Example output: 24
function getBiggerEven(number) {
    if (number%2===0) {
    return number+2;
    }
  else{
    return number+1;
  }
  }
  var result=getBiggerEven(23);
  console.log(result);
  
// 6. Create a simple calculator function
// Create a function that accepts three arguments(number1, number2, theMathOperator) and does a calculation based on the given math operator* and returns the result.

// Math operators: +, -, /, *
// Example input: (11,5,'+')
// Example output: 16

// Example input: (50,20,'/')
// Example output: 2.5

function calculator(number1,number2,operator) {
  if (operator ==='+'){
    return number1+number2;
  }
  if (operator === '-'){
    return number1-number2;
  }
  if (operator === '/'){
    return number1/number2;
  }
  if (operator === '*'){
    return number1*number2;
  }
}
var result=calculator(11,5,'*')
console.log(result);