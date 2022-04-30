import { findKDistantIndices } from "./index";

describe("K Distant Indexes in Array", () => {
  test("Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1 | Output: [1,2,3,4,5,6]", () => {
    const nums = [3, 4, 9, 1, 3, 9, 5];
    const key = 9;
    const k = 1;
    
    expect(findKDistantIndices(nums, key, k)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("Input: nums = [1], key = 1, k = 1 | Output: [0]", () => {
    const nums = [1];
    const key = 1;
    const k = 1;

    expect(findKDistantIndices(nums, key, k)).toEqual([0]);
  });
});
