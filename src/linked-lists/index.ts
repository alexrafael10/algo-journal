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

Logger.info("Create New List: ");
const list = createList([2, 5, 10]);
prettyPrintList(list);

Logger.info("Insert Element in the middle: (4)");
const newList1 = insertNodeAsc(list, new ListNode(4));
prettyPrintList(newList1);

Logger.info("Insert Element in the beginning: (1)");
const newList2 = insertNodeAsc(list, new ListNode(1));
prettyPrintList(newList2);

Logger.info("Insert Element in the end: (11)");
const newList3 = insertNodeAsc(list, new ListNode(11));
prettyPrintList(newList3);

