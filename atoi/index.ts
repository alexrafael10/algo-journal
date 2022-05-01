import { Logger } from "../utils";

export const myAtoi = (s: string): number => {
  // #1
  const trimmedInput = s.replace(/^( )+/g, "").replace(/( )+$/g, "").split("");
  let sign = null;

  let onlyNumbers = "";

  for (let i = 0; i < trimmedInput.length; i++) {
    const curr = trimmedInput[i];

    if (sign !== null && ["+", "-"].includes(curr)) {
      onlyNumbers = "";
      break;
    }

    if (["+", "-"].includes(curr)) {
      sign = curr === "+" ? +1 : -1;
      continue;
    }

    // #3
    if (/[\d]/.test(curr)) {
      onlyNumbers += curr;
      continue;
    }

    break;
  }
 
  const parsedNumber = parseInt(onlyNumbers || "0") * sign;

  const clampRange = [-(2 ** 31), 2**31 - 1];

  if (parsedNumber < clampRange[0]) return clampRange[0];

  if (parsedNumber > clampRange[1]) return clampRange[1];

  return parsedNumber;
}

if (require.main === module) {
  const args = process.argv;
  const s = args[2] ?? null;

  if (!s) {
    Logger.warn(
      "Assumed watch mode; Please provide an argument if not intended"
    );
    const ss = "42";
    Logger.info(`[watch-mode] Input: "${ss}", Output: ${myAtoi(ss)}`);
  } else {
    Logger.info(`Input: "${s}", Output: ${myAtoi(s)}`);
  }
}
