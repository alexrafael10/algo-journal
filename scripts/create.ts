import fs from "fs";

  const defaultFunctionTemplate = (functionName: string) => `
  import { Logger } from "../utils";

  export const test = (...args: string[]) => {};

  if (require.main === module) {
    const args = process.argv;
    const [_, __, ...inputArgs] = args[2] ?? null;

    if (!inputArgs) {
      Logger.warn(
        "Assumed watch mode; Please provide an argument if not intended"
      );
      const input = [];

      Logger.info(\`[watch-mode] Input: "\${input}", Output: \${${functionName}(...input)}\`);
    } else {
      Logger.info(\`Input: "\${inputArgs}", Output: \${${functionName}(...inputArgs)}\`);
    }
  }
`.trim()

const defaultTestTemplate = (functionName: string) => `
import { ${functionName} } from "./index";

describe("${functionName}", () => {
  test('Input: s = XXXX | Output: YYYY', () => {
    expect(${functionName}(XXXX)).toBe(YYYY);
  });
});
`.trim();


const createExercice = (folderName: string, defaultFunctionName = folderName) => {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }

  fs.writeFileSync(
    folderName + "/index.ts",
    defaultFunctionTemplate(defaultFunctionName),
    {

    }
  );
  fs.writeFileSync(
    folderName + "/index.test.ts",
    defaultTestTemplate(defaultFunctionName)
  );
}

if (require.main === module) {
  const [_, __, folderName, defaultFunctionName] = process.argv;
  createExercice(folderName, defaultFunctionName);
}