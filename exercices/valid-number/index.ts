import { Logger } from "../../utils";

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
    Logger.warn(
      "Assumed watch mode; Please provide an argument if not intended"
    );
    const ss = "-.5";
    Logger.info(`[watch-mode] Input: "${ss}", Output: ${isNumber(ss)}`);
  } else {
    Logger.info(`Input: "${s}", Output: ${isNumber(args[1])}`);
  }
}
