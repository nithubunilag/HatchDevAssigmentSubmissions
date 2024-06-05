//Name: Ajayi Odunayo Mayowa
//email: odunayoajayi2004@gmail.com
//github: odunayo222

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) {
        return [];
    }

    const ans: number[][] = [];
    const q: TreeNode[] = [root];

    while (q.length > 0) {
        const currLevel: number[] = [];
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


const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

const result = levelOrder(root);
console.log(result); 
