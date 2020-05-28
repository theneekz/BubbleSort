function split(wholeArray) {
  const firstHalf = wholeArray.splice(0, Math.round(wholeArray.length / 2));
  const secondHalf = wholeArray;
  return [firstHalf, secondHalf];
}
