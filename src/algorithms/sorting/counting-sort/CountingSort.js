import Sort from '../Sort';

export default class CountingSort extends Sort {
  /**
   * @param {number[]} originalArray
   */
  sort(originalArray) {
    // Initialize variables for smallest, biggest and frequency lookup.
    let detectedSmallestElement = originalArray[0];
    let detectedBiggestElement = originalArray[0];
    const elementCount = {};

    // Single iteration through the array to find the smallest and biggest, and to set up the frequency lookup.
    originalArray.forEach((element) => {
      // Visit element.
      this.callbacks.visitingCallback(element);

      // Track the smallest and biggest elements.
      if (this.comparator.greaterThan(element, detectedBiggestElement)) {
        detectedBiggestElement = element;
      }
      if (this.comparator.lessThan(element, detectedSmallestElement)) {
        detectedSmallestElement = element;
      }

      // Populate the frequency lookup table.
      if (!elementCount[element]) {
        elementCount[element] = 0;
      }
      elementCount[element] += 1;
    });

    // Create a sorted array.
    const sortedArray = [];

    // Iterate through the range from smallest to biggest elements adding elements from the lookup table to sortedArray.
    for (let i = detectedSmallestElement; i <= detectedBiggestElement; i += 1) {
      if (elementCount[i]) {
        for (let j = 0; j < elementCount[i]; j += 1) {
          sortedArray.push(i);
        }
      }
    }

    // Return the sorted array.
    return sortedArray;
  }
}