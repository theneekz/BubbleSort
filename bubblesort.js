function swap(array, index) {
  let currentValue = array[index];
  array[index] = array[index + 1];
  array[index + 1] = currentValue;
}

function bubbleSort(array) {
  //bool to see if we had to swap
  let didSwap = true;
  while (didSwap) {
    //this will only stay false if we go through the rest and
    //never swap anything! Saying the array is sorted.
    didSwap = false;
    //on each loop, decrement array.length
    for (let j = array.length; j > 0; j--) {
      //iterate each item of remaining array
      for (let i = 0; i < j; i++) {
        //if this element is greater than the one to the right
        if (array[i] > array[i + 1]) {
          //swap em
          swap(array, i);
          //track that you swapped and repeat the while loop
          didSwap = true;
        }
      }
    }
  }
  return array;
}
