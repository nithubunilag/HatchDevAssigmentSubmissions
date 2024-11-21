/* Bamgbose Christian
   Email: bamgbosechristian@gmail.com
   github username: C-J7
   github Address: http://github.com/C-J7
   Assignment: Tree Traversal - Preorder Traversal, leetcode
*/


function preorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
       return [];
   }
   
   const result: number[] = [];
   
   const traverse = (node: TreeNode | null) => {
       if (node === null) {
           return;
       }
       
       result.push(node.val);
       traverse(node.left);
       traverse(node.right);
       
   };
   
   traverse(root);
   
   return result;
   
};