export default (functionName) => `
import { Logger } from "../../utils/Logger";
const logger = new Logger();

const ${functionName} = (...args: string[]): number => {
  const [arg1] = args;

  return 0;
};

if (require.main === module) {
  const args = process.argv;
  const [_, __, ...inputArgs] = args[2] ?? null;

  if (!inputArgs) {
    logger.warn(
      "Assumed watch mode; Please provide an argument if not intended"
    );
    const input = [];

    logger.info(
      "[watch-mode] Input: " + input.join(", ") + ", Output: " + ${functionName}(...input)
    );
  } else {
    logger.info(
      "Input: " + inputArgs.join(", ") + ", Output: " + ${functionName}(...inputArgs)
    );
  }
}

export { ${functionName} };

`;