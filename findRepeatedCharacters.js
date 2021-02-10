//Write a method to check if a string has any repeating character

hasRepeatedChars = (str) => {

    const arr = Array.from(str);
    
    let obj = {};
    
    arr.forEach((currVal) => {
            obj[currVal] = (obj[currVal] || 0) + 1;
    })

    let nArr = Object.values(obj);
    if(Math.max(...nArr)>1){
        return true;
    }else{
        return false;
    }

}

console.log(hasRepeatedChars("holass"));