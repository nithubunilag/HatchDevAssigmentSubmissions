// Definition for a binary tree node.
class TreeNode {
   val: number
   left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
    }
 }
 

function isSymmetric(root: TreeNode | null): boolean {
    if(!root){
        return true;
    }
    let queue = [root.left, root.right];
    while(queue.length > 0){
        let t1 = queue.shift()
        let t2 = queue.shift()
        if(t1 === null && t2 === null){
            continue;
        }
        if(t1 === null || t2 === null){
            return false;
        }
        if(t1!.val !== t2!.val){
            return false;
        }
        queue.push(t1!.left);
        queue.push(t2!.right);
        queue.push(t1!.right);
        queue.push(t2!.left);
    }
    return true;
    
};