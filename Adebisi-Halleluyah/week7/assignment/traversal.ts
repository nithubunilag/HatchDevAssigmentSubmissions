class TreeNode1 {
    value: number;
    left: TreeNode1 | null;
    right: TreeNode1 | null;

    constructor(value: number, left: TreeNode1 | null = null, right: TreeNode1 | null = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function postOrderTraversal(root: TreeNode1 | null): number[] {
    const result: number[] = [];

    function traverse(node: TreeNode1 | null): void {
        if (node === null) {
            return;
        }

        // Visit left subtree
        traverse(node.left);
        // Visit right subtree
        traverse(node.right);
        // Visit root node
        result.push(node.value);
    }

    traverse(root);
    return result;
}

function preOrderTraversal(root: TreeNode1 | null): number[] {
    const result: number[] = [];

    function traverse(node: TreeNode1 | null): void {
        if (node === null) {
            return;
        }

        // Visit root node
        result.push(node.value);
        // Visit left subtree
        traverse(node.left);
        // Visit right subtree
        traverse(node.right);
    }

    traverse(root);
    return result;
}

function inOrderTraversal(root: TreeNode1 | null): number[] {
    const result: number[] = [];

    function traverse(node: TreeNode1 | null): void {
        if (node === null) {
            return;
        }

        // Visit left subtree
        traverse(node.left);
        // Visit root node
        result.push(node.value);
        // Visit right subtree
        traverse(node.right);
    }

    traverse(root);
    return result;
}



const root = new TreeNode1(1);
root.left = new TreeNode1(2);
root.right = new TreeNode1(3);
root.left.left = new TreeNode1(4);
root.left.right = new TreeNode1(5);

const result1 = postOrderTraversal(root);
const result2 = preOrderTraversal(root);
const result3 = inOrderTraversal(root);
console.log(`POST ORDER TRAVERSAL : ${result1}`);
console.log(`PRE ORDER TRAVERSAL : ${result2}`);
console.log(`IN ORDER TRAVERSAL : ${result3}`);

