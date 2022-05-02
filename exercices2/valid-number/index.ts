import { Logger } from "../../utils/Logger";

export const isNumber = (s: string): boolean => {
  const sign = `[+-]`;
  const digit = `\\d`;
  const digits = `(${digit}+)`;
  const integer = `(${sign}?${digits})`;
  const exponent = `([eE]${integer})`;
  const decimal = `(${sign}?((${digits}[.])|(${digits}[.]${digits})|([.]${digits})))`;  

  const validNumber = `(${integer}|${decimal})${exponent}?`;

  const fullRegex = new RegExp(`^${validNumber}$`);

  return fullRegex.test(s);
};

if (require.main === module) {
  const args = process.argv;
  const s = args[2] ?? null;

  if (!s) {
    logger.warn(
      "Assumed watch mode; Please provide an argument if not intended"
    );
    const ss = "-.5";
    logger.info(`[watch-mode] Input: "${ss}", Output: ${isNumber(ss)}`);
  } else {
    logger.info(`Input: "${s}", Output: ${isNumber(args[1])}`);
  }
}
