import { isEquals } from "../array/index.js";
import { Logger } from "../utils.js";

type AssertionCallback = (...params: unknown[]) => boolean;

const TAB = "  ";
const SUCCESS_MESSAGE = "✓ Assertion Passed";
const FAIL_MESSAGE = "✘ Assertion Failed";

const logger = new Logger();

const logResults = (assertion: boolean, expected, received) => {
  if (assertion) {
    logger.info(SUCCESS_MESSAGE);
    return;
  }

  const errorMessage = `${TAB}- Expected: ${expected}\n${TAB}+ Received: ${received}`;
  logger.error(FAIL_MESSAGE);
  logger.info(errorMessage);
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
    toBeFalsy: () => runComparator(() => !!received, received, expect),
  };
};
