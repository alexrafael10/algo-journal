import { isEquals } from "../array/index.js";
import Logger from "../utils/Logger.js";

type AssertionCallback = (...params: unknown[]) => boolean;

const TAB = "  ";
const SUCCESS_MESSAGE = "✓ Assertion Passed";
const FAIL_MESSAGE = "✘ Assertion Failed";

const logResults = (assertion: boolean, expected, received) => {
  // enable logging for this function if silent was set before
  const loggerIsMuted = Logger.silent;
  if (loggerIsMuted) Logger.silent = false;

  if (assertion) {
    Logger.info(SUCCESS_MESSAGE);
  } else {
    const errorMessage = `${TAB}- Expected: ${expected}\n${TAB}+ Received: ${received}`;
    Logger.error(FAIL_MESSAGE);
    Logger.info(errorMessage);
  }

  // go back to previews Logger.silent before the function ran
  Logger.silent = loggerIsMuted;
};

const runComparator = (
  comparator: AssertionCallback,
  received: unknown,
  expected?: unknown
) => {
  const params = [received];
  if (expected) params.push(expected);
  logResults(comparator(...params), expected, received);
};

export const expect = (received: unknown) => {
  return {
    toBe: (expected: unknown) => runComparator(isEquals, received, expected),
    toBeFalsy: () => runComparator(() => !received, received, false),
    toBeTruthy: () => runComparator(() => !!received, received, true),
  };
};
