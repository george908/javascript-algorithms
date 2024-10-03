import CountingSort from '../CountingSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 20;
const NOT_SORTED_ARRAY_VISITING_COUNT = 20;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 20;
const EQUAL_ARRAY_VISITING_COUNT = 20;

describe('CountingSort', () => {
  it('should sort array', () => {
    SortTester.testSort(CountingSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(CountingSort);
  });

  it('should allow to use specify max/min integer value in array to make sorting faster', () => {
    const visitingCallback = jest.fn();
    const sorter = new CountingSort({ visitingCallback });

    // Detect biggest number in array in prior.
    const biggestElement = Math.max(...notSortedArr);

    // Detect smallest number in array in prior.
    const smallestElement = Math.min(...notSortedArr);

    const sortedArray = sorter.sort(notSortedArr, smallestElement, biggestElement);

    expect(sortedArray).toEqual(sortedArr);
    // it should be called only 20 times.
    expect(visitingCallback).toHaveBeenCalledTimes(20);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      CountingSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      CountingSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      CountingSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      CountingSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
