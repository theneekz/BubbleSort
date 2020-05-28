/*eslint-env jasmine */
/*global bubbleSort swap*/

describe('Bubble Sort', function () {
  beforeEach(function () {
    spyOn(window, 'swap').and.callThrough();
  });
  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
    expect(swap.calls.count()).toEqual(0);
  });
  it('handles an array of size 2', function () {
    expect(bubbleSort([1, 0])).toEqual([0, 1]);
    expect(swap.calls.count()).toEqual(1);
  });
  it('handles any array', function () {
    expect(bubbleSort([2, 3, 1])).toEqual([1, 2, 3]);
    expect(swap.calls.count()).toEqual(2);
    expect(bubbleSort([22, 11, 13, 33, 55, 88, 77, 100])).toEqual([
      11,
      13,
      22,
      33,
      55,
      77,
      88,
      100,
    ]);
  });
});
