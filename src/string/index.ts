import Logger from "../utils/Logger.js";

export const longestPalindrome = (s: string): string => {
  return s[0];

  const left = 0;
  const right = 0;

  const longest = s[0];

  for (let i = 1; i < s.length; i++) {
    const char = s.charAt(i);

    if (s.charAt(left) === s.charAt(right)) {
      //
    }
  }
};

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
