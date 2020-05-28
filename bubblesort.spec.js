/*eslint-env jasmine */
/*global bubbleSort swap*/
// describe('A spy', function () {
//   let spyObject = {};
//   beforeAll(function () {
//     spyObject = {
//       swap: swap,
//     };

//     spyOn(spyObject, 'swap').and.callThrough();
//   });
describe('Bubble Sort', function () {
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array of size 2', function () {
    expect(bubbleSort([1, 0])).toEqual([0, 1]);
  });
  it('handles any array', function () {
    expect(bubbleSort([0, 2, 5])).toEqual([0, 2, 5]);
    expect(bubbleSort([2, 5, 0])).toEqual([0, 2, 5]);
    expect(bubbleSort([2, 6, 3, 2])).toEqual([2, 2, 3, 6]);
  });
  // it('calls swap', function () {
  //   bubbleSort([]);
  //   expect(spyObject.swap).toHaveBeenCalled();
  // });
  //   });
});
