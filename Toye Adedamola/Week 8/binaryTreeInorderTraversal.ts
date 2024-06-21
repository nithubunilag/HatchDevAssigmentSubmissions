//Toye Adedamola Taibat
//toye.adedamola@gmail.com

//Definition for a binary tree node.
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
 
 
function inorderTraversal(root: TreeNode | null): number[] {
   const inorder = (root, out) =>{
    if(root){
        inorder(root.left, out);
        out.push(root.val);
        inorder(root.right, out);
    }
   }
   const out = []
   inorder(root, out);
   return out;
};

