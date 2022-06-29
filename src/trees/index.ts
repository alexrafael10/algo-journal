import Logger from "../utils/Logger.js";

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const insertNodeAsc = (root: TreeNode | null, newNode: TreeNode) => {
  if (!root) return newNode;

  if (newNode.val < root.val) {
    if (root.left === null) {
      root.left = newNode;
    } else {
      root.left = insertNodeAsc(root.left, newNode);
    }
  }

  if (newNode.val > root.val) {
    if (root.right === null) {
      root.right = newNode;
    } else {
      root.right = insertNodeAsc(root.right, newNode);
    }
  }

  return root;
};

export const createBinaryTree = (arr: number[]): TreeNode | null => {
  let root: TreeNode | null = null;

  for (const curr of arr) {
    root = insertNodeAsc(root, new TreeNode(curr));
  }

  return root;
};

export const binaryTreeToArray = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const levels: number[][] = [];

  const traverse = (current: TreeNode, level = 0) => {
    if (!levels[level]) {
      levels[level] = [current.val];
    } else {
      levels[level].push(current.val);
    }

    if (current.left) traverse(current.left, level + 1);
    if (current.right) traverse(current.right, level + 1);
  };

  traverse(root, 0);

  return levels.flat();
};

export const treeEquals = (a: TreeNode | null, b: TreeNode | null) => {
  if (!a && !b) return true;

  const compare = (nodeA: TreeNode | null, nodeB: TreeNode | null): boolean => {
    if (nodeA?.left && nodeB?.left) return compare(nodeA?.left, nodeB?.left);
    if (nodeA?.right && nodeB?.right)
      return compare(nodeA?.right, nodeB?.right);

    return nodeA?.val === nodeB?.val;
  };

  return compare(a, b);
};

// function invertTree(root: TreeNode | null): TreeNode | null {}
