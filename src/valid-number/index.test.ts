import { isNumber } from "./index";

describe("Valid Number", () => {
  test("'2' is valid number", () => {
    expect(isNumber("2")).toBe(true);
  });
  test("'0089' is valid number", () => {
    expect(isNumber("0089")).toBe(true);
  });
  test("'-0.1' is valid number", () => {
    expect(isNumber("-0.1")).toBe(true);
  });
  test("'+3.14' is valid number", () => {
    expect(isNumber("+3.14")).toBe(true);
  });
  test("'4.' is valid number", () => {
    expect(isNumber("4.")).toBe(true);
  });
  test("'-.9' is valid number", () => {
    expect(isNumber("-.9")).toBe(true);
  });
  test("'2e10' is valid number", () => {
    expect(isNumber("2e10")).toBe(true);
  });
  test("'-90E3' is valid number", () => {
    expect(isNumber("-90E3")).toBe(true);
  });
  test("'3e+7' is valid number", () => {
    expect(isNumber("3e+7")).toBe(true);
  });
  test("'+6e-1' is valid number", () => {
    expect(isNumber("+6e-1")).toBe(true);
  });
  test("'53.5e93' is valid number", () => {
    expect(isNumber("53.5e93")).toBe(true);
  });
  test("'-123.456e789' is valid number", () => {
    expect(isNumber("-123.456e789")).toBe(true);
  });
  test("'abc' is NOT a valid number", () => {
    expect(isNumber("abc")).toBe(false);
  });
  test("'1a' is NOT a valid number", () => {
    expect(isNumber("1a")).toBe(false);
  });
  test("'1e' is NOT a valid number", () => {
    expect(isNumber("1e")).toBe(false);
  });
  test("'e3' is NOT a valid number", () => {
    expect(isNumber("e3")).toBe(false);
  });
  test("'99e2.5' is NOT a valid number", () => {
    expect(isNumber("99e2.5")).toBe(false);
  });
  test("'--6' is NOT a valid number", () => {
    expect(isNumber("--6")).toBe(false);
  });
  test("'-+3' is NOT a valid number", () => {
    expect(isNumber("-+3")).toBe(false);
  });
  test("'95a54e53' is NOT a valid number", () => {
    expect(isNumber("95a54e53")).toBe(false);
  });
});
