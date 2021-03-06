import Logger from "../utils/Logger.js";

export const arrayEquals = (arrA: unknown[] = [], arrB: unknown[]) => {
  if (arrA.length !== arrB.length) return false;
  const anyDifferent = arrA.some((a, index) => a !== arrB[index]);
  return !anyDifferent;
};

export const shortestVacationPossible = (A: number[]): number => {
  let shortest = Infinity;

  let start = 0;
  let end = 0;

  const map = { [A[0]]: 1 };

  for (let i = 1; i < A.length; i++) {
    map[A[i]] = (map[A[i]] ?? 0) + 1;

    Logger.info(map);

    if (A[start] !== A[end] || map[A[i]] === 1) {
      end = i;
    }

    while (A[start] === A[i] && map[A[i]] > 1) {
      start++;
      map[A[i]]--;
    }

    shortest = Math.min(end - start + 1, shortest);

    Logger.info({ i, curr: A[i], start, end, map }, "\n");
  }

  return shortest;
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

export const twoSum = (nums: number[], target: number): number[] => {
  const map: { [k: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (map[current] >= 0) {
      return [map[current], i];
    }

    map[target - current] = i;
  }

  //just to make TS Happy, not reachable
  return [-1, -1];
};

export const binarySearch = (nums: number[], target: number): number => {
  let left = 0;
  let right = nums.length - 1;
  let middle = Math.floor(right / 2);

  while (left <= right) {
    if (nums[middle] === target) return middle;

    if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }

    middle = left + Math.floor((right - left) / 2);
  }

  return -1;
};
