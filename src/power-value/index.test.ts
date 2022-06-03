import { getKth } from "./index";

describe("Power Value", () => {
  test("Input: lo = 12, hi = 15, k = 2 | Output: 13", () => {
    expect(getKth(12, 15, 2)).toBe(13);
  });

  test("Input: lo = 7, hi = 11, k = 4 | Output: 7", () => {
    expect(getKth(7, 11, 4)).toBe(7);
  });
})