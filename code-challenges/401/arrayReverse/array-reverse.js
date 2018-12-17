let arr = [1,2,3];

function revArr(arr){
  let newArr = [];
  for(let i = arr.length-1; i >=0; i--){
    newArr.push(arr[i]);
  }
  return newArr;
}

revArr(arr);