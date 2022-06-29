import { arrayEquals } from "../array/index.js";
import { binaryTreeToArray, TreeNode } from "../tree/index.js";
import Logger from "../utils/Logger.js";

type AssertionCallback = (...params: unknown[]) => boolean;

const TAB = "  ";
const SUCCESS_MESSAGE = "✓ Assertion Passed";
const FAIL_MESSAGE = "✘ Assertion Failed";

const isEqualsGeneric = (target: unknown, compare: unknown) => {
  if (typeof target !== typeof compare) return false;

  if (Array.isArray(target) && Array.isArray(compare)) {
    return arrayEquals(target, compare);
  }

  //If target is a TreeNode, then we expect compare to be an array
  if (
    (target instanceof TreeNode || target === null) &&
    Array.isArray(compare)
  ) {
    return arrayEquals(binaryTreeToArray(target), compare);
  }

  if (typeof target === "object" && typeof compare === "object") {
    throw "not supported yet";
  }

  return target === compare;
};

const formatData = (data: unknown): string => {
  if (data instanceof TreeNode) {
    return `[${binaryTreeToArray(data).join()}]`;
  }

  if (Array.isArray(data)) {
    return `[${data.join()}]`;
  }

  return (data as any).toString();
};

const logResults = (assertion: boolean, expected, received) => {
  // enable logging for this function if silent was set before
  const loggerIsMuted = Logger.silent;
  if (loggerIsMuted) Logger.silent = false;

  if (assertion) {
    Logger.info(SUCCESS_MESSAGE);
  } else {
    const expectedFormattedString = formatData(expected);
    const receivedFormattedString = formatData(received);
    const errorMessage = `${TAB}- Expected: ${expectedFormattedString}\n${TAB}+ Received: ${receivedFormattedString}`;
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
  if (typeof expected !== undefined) params.push(expected);
  logResults(comparator(...params), expected, received);
};

export const expect = (received: unknown) => {
  return {
    toBe: (expected: unknown) =>
      runComparator(isEqualsGeneric, received, expected),
    toBeFalsy: () => runComparator(() => !received, received, false),
    toBeTruthy: () => runComparator(() => !!received, received, true),
  };
};
