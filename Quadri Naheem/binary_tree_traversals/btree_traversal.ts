/**
 * Name: Quadri Naheem
 * Email: naheemquadri3410@gmail.com
 */

class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inorderTraversal(node: TreeNode | null, result: number[] = []): number[] {
    if (node !== null) {
        inorderTraversal(node.left, result);
        result.push(node.value);
        inorderTraversal(node.right, result);
    }
    return result;
}


function preorderTraversal(node: TreeNode | null, result: number[] = []): number[] {
    if (node !== null) {
        result.push(node.value);
        preorderTraversal(node.left, result);
        preorderTraversal(node.right, result);
    }
    return result;
}


function postorderTraversal(node: TreeNode | null, result: number[] = []): number[] {
    if (node !== null) {
        postorderTraversal(node.left, result);
        postorderTraversal(node.right, result);
        result.push(node.value);
    }
    return result;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log('Inorder:', inorderTraversal(root));
console.log('Preorder:', preorderTraversal(root));
console.log('Postorder:', postorderTraversal(root));
