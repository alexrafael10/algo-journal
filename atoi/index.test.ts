import { myAtoi } from "./index";

describe("atoi", () => {
  test('Input: s = "42" | Output: 42', () => {
    expect(myAtoi("42")).toBe(42);
  });

  test('Input: s = "   -42" | Output: -42', () => {
    expect(myAtoi("42")).toBe(42);
  });

  test('Input: s = "4193 with words" | Output: 4193', () => {
    expect(myAtoi("42")).toBe(42);
  });

  test('Input: s = "words and 987" | Output: 0', () => {
    expect(myAtoi("words and 987")).toBe(0);
  });

  test('Input: s = "-91283472332" | Output: -2147483648', () => {
    expect(myAtoi("-91283472332")).toBe(-2147483648);
  });

  test('Input: s = "91283472332" | Output: 2147483647', () => {
    expect(myAtoi("91283472332")).toBe(2147483647);
  });

  test('Input: s = ".1" | Output: 0', () => {
    expect(myAtoi(".1")).toBe(0);
  });

  test('Input: s = "+-12" | Output: 0', () => {
    expect(myAtoi("+-12")).toBe(0);
  });
});
