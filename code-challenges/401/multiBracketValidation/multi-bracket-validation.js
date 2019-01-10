'use strict';


let multiBracketValidation = (str) => {
  let arr = [];
  for(let i=0; i<str.length; i++){
    if(str.length < 2){
      return false;
    }
    if(str[i]==='{' || str[i]==='[' || str[i]==='('){
      arr.unshift(str[i]);
    }
    if(str[i] === '}'){
      if(arr[0] !== '{'){
        return false;
      }
      arr.splice(0,1);
    }
    if(str[i] === ']'){
      if(arr[0] !== '['){
        return false;
      }
      arr.splice(0,1);
    }
    if(str[i] === ')'){
      if(arr[0] !== '('){
        return false;
      }
      arr.splice(0,1);
    }
  }
  return true;
};

module.exports = multiBracketValidation;

