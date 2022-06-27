import { Logger } from "../utils.js";
const logger = new Logger();

export const arrayEquals = (arrA: unknown[] = [], arrB: unknown[]) => {
  if (arrA.length !== arrB.length) return false;
  const anyDifferent = arrA.some((a, index) => a !== arrB[index]);
  return !anyDifferent;
};

export const isEquals = (target: unknown, compare: unknown) => {
  if (typeof target !== typeof compare) return false;

  if (Array.isArray(target) && Array.isArray(compare))
    return arrayEquals(target, compare);

  if (typeof target === "object" && typeof compare === "object") {
    throw "not supported yet";
  }

  return target === compare;
};

logger.silent = true;

export const shortestVacationPossible = (A: number[]): number => {
  let start = 0;
  let end = 0;

  const map = { [A[0]]: 1 };

  for (let i = 1; i < A.length; i++) {
    map[A[i]] = (map[A[i]] ?? 0) + 1;

    logger.info(map);

    if (i === 3) {
      logger.info(A[start], A[i], map[A[i]]);
    }

    while (A[start] === A[i] && map[A[i]] > 1) {
      start++;
      map[A[i]]--;
    }

    if (map[A[i]] === 1) end = i;

    logger.info({ i, curr: A[i], start, end, map }, "\n");
  }

  return end - start + 1;
};

export const maxSubArray = (nums: number[]): number => {
  let prev = 0;
  let max = -Number.MAX_VALUE;

  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i]);
    max = Math.max(max, prev);
  }
  return max;
};
