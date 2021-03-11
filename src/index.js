function sort (arr) {
  let n = arr.length;

  for (let i = 0; i< n-1; i++) {
      let min = i;
  for (let j = i +1; j < n; j++) {
      if (arr[j] < arr[min]) {
          min = j;
      }
  }  
  let t = arr[min];
  arr[min] = arr[i];
  arr[i] = t;
  }
  return arr;
}

exports.min = function min (array) {
  let sortArr = sort(array);
  return sortArr[0];
  
}

exports.max = function max (array) {
  let sortArr = sort(array);
  return sortArr[array.length - 1];
  
}

exports.avg = function avg (array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
      result += array[i];
  }
  return result / array.length;
}