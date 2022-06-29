import { ListNode } from "./types.js";

export const prettyPrintList = (list: ListNode | null): string => {
  let iter = list;
  let result = "";
  while (iter) {
    result += `${iter.val} ${iter.next ? "-> " : ""}`;
    iter = iter.next;
  }

  // eslint-disable-next-line no-console
  console.log(result);

  return result;
};