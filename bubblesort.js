function swap(array, index) {
  let currentValue = array[index];
  array[index] = array[index + 1];
  array[index + 1] = currentValue;
}

function bubbleSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    for (let j = array.length; j > 0; j--) {
      let swapped = false;
      for (let i = 0; i < j; i++) {
        if (array[i] > array[i + 1]) {
          swap(array, i);
          swapped = true;
        }
      }
    }
  }
  return array;
}

bubbleSort([]);
