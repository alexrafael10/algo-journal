import { Logger } from "../utils.js";
import { ListNode } from "./types.js";
import { prettyPrintList } from "./utils.js"

/**
 * Creates a list from a given array of numbers
 */
export const createList = (arr: number[]) => {
  const [value, ...rest] = arr;

  const next = arr.length === 1 ? null : createList(rest);
  return new ListNode(value, next);
}

/**
 * Insert a node in an ordered list (asc)
 */
export const insertNodeAsc = (list: ListNode | null, node: ListNode | null) => {
  let aux = list;

  if (!aux || !node) return node;

  if (aux.val > node.val) {
    node.next = aux;
    return node;
  }

  while (aux) {
    const next = aux.next;

    if (next && next.val > node.val) {
      aux.next = node;
      node.next = next;
      break;
    }

    if (aux.next === null) {
      aux.next = node;
      break;
    }

    aux = next;
  }

  return list;

};

export const reverseList = (node: ListNode | null): ListNode | null => {
  let prev: ListNode | null = null;

  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }

  return prev;
};

export const listMiddlePoint = (head: ListNode | null) => {
  let fast = head;
  let slow = head;

  while (fast?.next) {
    fast = fast.next.next;
    slow = slow?.next ?? null;
  }

  return slow;
}