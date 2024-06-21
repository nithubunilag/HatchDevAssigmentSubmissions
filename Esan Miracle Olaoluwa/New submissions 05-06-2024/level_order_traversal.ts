// ESANMIRACLE OLAOLUWA
//miracleesan7@gmail.com
//MiracleDev0

class TreeNode<T> {
    val: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(val: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
function levelOrder<T>(root: TreeNode<T> | null): T[][] {
    if (!root) {
        return [];
    }

    const ans: T[][] = [];
    const q: TreeNode<T>[] = [root];

    while (q.length > 0) {
        const currLevel: T[] = [];
        const levelSize = q.length;

        for (let i = 0; i < levelSize; i++) {
            const node = q.shift()!;
            currLevel.push(node.val);
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }

        ans.push(currLevel);
    }

    return ans;
}
// Creating a tree with number values
const rootNum = new TreeNode<number>(1);
rootNum.left = new TreeNode<number>(2);
rootNum.right = new TreeNode<number>(3);
rootNum.left.left = new TreeNode<number>(4);
rootNum.left.right = new TreeNode<number>(5);
rootNum.right.left = new TreeNode<number>(6);
rootNum.right.right = new TreeNode<number>(7);

// Performing level order traversal
const resultNum = levelOrder(rootNum);
console.log(resultNum); // Output: [[1], [2, 3], [4, 5, 6, 7]]