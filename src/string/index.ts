import Logger from "../utils/Logger.js";

export const isPalindrome = (s: string): boolean => {
  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    const charLeft = s.charAt(left).toLocaleLowerCase();
    if (!/[a-z0-9]/.test(charLeft)) {
      left++;
      continue;
    }

    const charRight = s.charAt(right).toLocaleLowerCase();
    if (!/[a-z0-9]/.test(charRight)) {
      right--;
      continue;
    }

    if (charLeft !== charRight) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const map: { [k: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    const charS = s.charAt(i);
    const charT = t.charAt(i);

    map[charS] = (map[charS] ?? 0) + 1;
    map[charT] = (map[charT] ?? 0) - 1;
  }

  return Object.values(map).every((m) => m === 0);
};
