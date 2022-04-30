import { minSteps } from "./index"

describe("2 Keys Keyboard Exercise", () => {
    test("it outputs 3 if n = 3",() => {
        expect(minSteps(3)).toBe(3)
    });
    test("it outputs 0 if n = 1",() => {
        expect(minSteps(1)).toBe(0)
    });
    test("it outputs 5 if n = 6",() => {
        expect(minSteps(6)).toBe(5)
    });
})