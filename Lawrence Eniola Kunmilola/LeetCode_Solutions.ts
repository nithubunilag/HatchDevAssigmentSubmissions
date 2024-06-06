///LAWRENCE ENIOLA KUNMILOLA
///lawrencekunmilola@gmail.com

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

////94. Binary Tree Inorder Traversal
function inorderTraversal(root: TreeNode | null, value:Array<number>=[]): number[] {
    if(root) {
    inorderTraversal(root.left, value);
    value.push(root.val)
    inorderTraversal(root.right, value);
    }
    return value
};

////144. Binary Tree Preorder Traversal
function preorderTraversal(root: TreeNode | null, values=[]): number[] {
    if(root){
        values.push(root.val)
        preorderTraversal(root.left, values)
        preorderTraversal(root.right, values)
    }
    return values
};

///145. Binary Tree Postorder Traversal
function postorderTraversal(root: TreeNode | null, values: number[] = []): number[] {
    if (root) {
        postorderTraversal(root.left, values);
        postorderTraversal(root.right, values);
        values.push(root.val);
    }
    return values;
}

////102. Binary Tree Level Order Traversal
function levelOrder(root: TreeNode | null): number[][] {
    let result: number[][] = [];
    if (!root) return result;
    
    let queue: TreeNode[] = [root];
    
    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel: number[] = [];
        
        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift()!;
            currentLevel.push(currentNode.val);
            
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        
        result.push(currentLevel);
    }
    
    return result;
}

/////450. Delete Node in a BST
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;
    
    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        
        let minLargerNode = getMin(root.right);
        root.val = minLargerNode.val;
        root.right = deleteNode(root.right, minLargerNode.val);
    }
    return root;
}

function getMin(node: TreeNode): TreeNode {
    while (node.left !== null) {
        node = node.left;
    }
    return node;
}
