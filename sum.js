const arr = [1, 2, 3, 4]

function sumArray(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
  }
  return sum;
}

console.log(sumArray(arr));