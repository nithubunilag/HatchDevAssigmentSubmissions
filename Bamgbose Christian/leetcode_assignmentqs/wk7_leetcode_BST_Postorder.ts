/* Bamgbose Christian 
   Email: bamgbosechristian@gmail.com
   github username: C-J7
   github Address: http://github.com/C-J7
   Assignment: Binary Tree Postorder Traversal, leetcode
*/
function postorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }
    
    const result: number[] = [];
    
    const traverse = (node: TreeNode | null) => {
        if (node === null) {
            return;
        }
        
        traverse(node.left);
        traverse(node.right);
        result.push(node.val);
    };
    
    traverse(root);
    
    return result;
    
};