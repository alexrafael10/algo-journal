/**
 * File meant to quickly test stuff
 *
 * has its own command because i'm lazy
 *
 * npm run temp
 */

import { shortestVacationPossible } from "./array/index.js";
import { longestPalindrome } from "./string/index.js";
import { expect } from "./utils/assert.js";

// import { longestPalindrome } from "./string/index.js";
// import { expect } from "./utils/assert.js";

// const RUN_ALL = false;

// const problems: [any[], any[], boolean?][] = [
//   [["babad"], ["bab"], RUN_ALL || false],
//   [["cbbd"], ["bb"], RUN_ALL || false],
//   [["zcaba"], ["aba"], RUN_ALL || false],
//   [["a"], ["a"], RUN_ALL || false],
//   [["a"], ["a"], RUN_ALL || false],
//   [["aacabdkacaa"], ["aca"], RUN_ALL || true],
// ];

// for (const problem of problems) {
//   const [input, output, shouldRun] = problem;
//   if (!shouldRun) continue;

//   expect(longestPalindrome(input[0])).toBe(output[0]);
// }

// 2  1  1  [3  2  1]  1  3

// [3, 5]

// expect(shortestVacationPossible([7, 3, 7, 3, 1, 3, 4, 1])).toBe(5);
expect(shortestVacationPossible([2, 1, 1, 3, 2, 1, 1, 3])).toBe(3);
// expect(shortestVacationPossible([7, 5, 2, 7, 2, 7, 4, 7])).toBe(6);4

// b a b a d

// q b a b d
