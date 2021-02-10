/*

A palindrome is a word, phrase, number or sequence of words that reads the same backward as forward.

*/

const strings = [
  "Anna",
  "221",
  "333,333,333",
  "Civic",
  "Kayak",
  "Level",
  "Madam",
  "Mom",
  "Noon",
  "Nadscar",
  "Bitcoin",
  "Racecar",
  "Radar",
  "Redder",
  "Refer",
  "Repaper",
  "Rotator",
  "Rotor",
  "yeah",
  "Sagas",
  "Solos",
  "Stats",
  "Tenet",
  "Wow",
  "Don't nod",
  "I did, did I", //"I did ,did I",
  "My gym",
  "Red rum, sir, is murder",
  "Step on no pets",
  "Stairs on no starts",
  "Top spot",
  "Was it a cat I saw",
  "Eva, can I see bees in a cave",
  "No lemon, no melon",
  ]
  
  const getPalindromeCount = (strings) => {
    let count
    const nArr = strings.reduce((acc, curr ) => {
      if(isPalindrome(curr)){
        count++
      };
      return count;
    })  
  }
  
  
  const isPalindrome = (str) => {
    
    // Apply a regex function
    const valStr =  /^[A-Za-z]+$/;
    if (!str.match(valStr)) return false;
                  
    const nstr = str.split();
    const strReverse = nstr.reverse();
    const strJoined = strReverse.join("");
    
    if(str === strJoined){
      return true;
    }
    else{
      return false;
    }
    
  }
  
  console.log(getPalindromeCount(strings));