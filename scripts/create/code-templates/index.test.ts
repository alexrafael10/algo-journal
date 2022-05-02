export default (functionName) => `
import { ${functionName} } from "./index";

describe("${functionName}", () => {
  test('Input: s = XXXX | Output: YYYY', () => {
    const input = ["XXXX"];
    const output = 0000;
    expect(${functionName}(...input)).toBe(output);
  });
  
});

`;
