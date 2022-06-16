import { isEquals } from "../array/index.js";
import { Logger } from "../utils.js";

type AssertionCallback = (expected: unknown) => boolean;

const TAB = "  ";
const SUCCESS_MESSAGE = "✓ Assertion Passed";
const FAIL_MESSAGE = "✘ Assertion Failed"

const logResults = (assertion: boolean, expected, received) => {
  if (assertion) {
    Logger.info(SUCCESS_MESSAGE);
    return;
  }

  const errorMessage = `${TAB}- Expected: ${expected}\n${TAB}+ Received: ${received}`
  Logger.error(FAIL_MESSAGE);
  Logger.info(errorMessage);
};

const gatherResults = (received, assertionCb: AssertionCallback) => {
  return (expected) => {
    const assertion = assertionCb?.(expected);
    logResults(assertion, expected, received);
  }
}

export const assert = (received: unknown) => {
  const eq = (expected: unknown) => isEquals(expected, received);

  return {
    eq: gatherResults(received, eq)
  }
};