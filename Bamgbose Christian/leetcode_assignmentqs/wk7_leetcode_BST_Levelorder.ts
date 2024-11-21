/* Bamgbose Christian
   Email: bamgbosechristian@gmail.com
   github username: C-J7
   github Address: http://github.com/C-J7
   Assignment: Binary Tree Level Order Traversal, leetcode
*/



function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) return [];

    const result: number[][] = [];
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const currentLevelValues: number[] = [];
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            currentLevelValues.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(currentLevelValues);
    }

    return result;
}
  