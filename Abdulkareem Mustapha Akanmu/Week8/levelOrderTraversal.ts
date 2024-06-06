/**
 * FULL NAME: Abdulkareem Mustapha Akanmu
 * EMAIL: aphatheology@gmail.com
 * GITHUB USERNAME: Aphatheology
 */

function levelOrder(root: TreeNode<number> | null): number[][] {
  if (root === null) return [];

  const result: number[][] = [];
  const queue: TreeNode<number>[] = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      if (currentNode) {
        currentLevel.push(currentNode.data);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
};