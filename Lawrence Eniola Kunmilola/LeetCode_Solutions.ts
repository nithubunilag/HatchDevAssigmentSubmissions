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

////
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
