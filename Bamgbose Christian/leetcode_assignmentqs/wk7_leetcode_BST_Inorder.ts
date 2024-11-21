/* Bamgbose Christian 
   Email: bamgbosechristian@gmail.com
   github username: C-J7
   github Address: http://github.com/C-J7
   Assignment: Tree Traversal - Inorder Traversal, leetcode
*/

function inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
       return [];
   }
   
   const result: number[] = [];
   
   const traverse = (node: TreeNode | null) => {
       if (node === null) {
           return;
       }
       
       traverse(node.left);
       result.push(node.val);
       traverse(node.right);
       
   };
   
   traverse(root);
   
   return result;
   
};