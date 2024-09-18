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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    function findMaxNode(node: TreeNode):TreeNode{
        if (!node.right){
            return node;
        }
        return findMaxNode(node.right);
    }
    if(!root){
        return null;
    }
    if(key < root.val){
        root.left = deleteNode(root.left, key);
    }
    else if(key > root.val){
        root.right = deleteNode(root.right, key);
    }
    else{
        if(!root.left && !root.right){
            root = null;
        }
        else if(!root.left){
            root = root.right;
        }
        else if(!root.right){
            root = root.left
        }
        else{
            const maxNode = findMaxNode(root.left);
            root.val = maxNode.val;
            root.left = deleteNode(root.left, maxNode.val);
        }
    }
    return root;
};