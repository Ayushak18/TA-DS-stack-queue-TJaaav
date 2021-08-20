// Linear Search

function linearSearch(array, value) {
  for (let i = 0; i <= array.length; i++) {
    if (value === array[i]) {
      return i;
    }
  }
  return -1;
}

// Binary Search

function binarySearch(array, value) {
  array.sort((a, b) => a - b);
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (array[mid] === value) {
      return mid;
    }
    if (array[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
