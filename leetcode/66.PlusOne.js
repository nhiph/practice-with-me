var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    // If the current digit is 9, set it to 0
    digits[i] = 0;
  }

  // If all digits were 9, create a new array with an extra length and set the first element to 1
  digits.unshift(1);
  return digits;
};

console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([0])); // [1]
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));

/*
Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].


Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].


Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/
