//Post order Traversal  
//Definition for a binary tree node.
/*   class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
 } */
 

function postorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];

    function traverse(node: TreeNode | null): void {
        if (node === null) {
            return;
        }

        // Visit left subtree
        traverse(node.left);
        // Visit right subtree
        traverse(node.right);
        // Visit root node
        result.push(node.val);
    }

    traverse(root);
    return result;
    
};