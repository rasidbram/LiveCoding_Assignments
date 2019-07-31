// truncatestring
function truncateString(firstString,number) {
    return firstString.slice(0,number);
  }
   var result =truncateString('Lord of the Rings',7)
   console.log(result);


// Confirm Ending


//  .endsWith() used
function findLastWords(message,searchingWord) {
    return message.endsWith(searchingWord)
  }
  var result = findLastWords('Arrival of the birds','birds')
  console.log(result);

//   .substring() used
  function findLastWords(message,searchingWord){
    var x=message.length;
    var y=searchingWord.length;
    var last=message.substring((x-y),x);
  
    if (searchingWord===last){
        return true;
    }else {
      return false;
    }
  }
   var result = findLastWords('lord of the rings','gs');
   console.log(result);