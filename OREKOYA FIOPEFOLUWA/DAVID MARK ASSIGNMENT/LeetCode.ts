               //PROBLEM No.94(Binary Tree Inorder Traversal)
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

function inorderTraversal(root: TreeNode | null): number[] {
    // const output : number[] = []

    //     if(!node) 
    //     return []
    //     output.push(...this.inorder(node!.left))
    //     output.push(node?.value!)
    //     output.push(...this.inorder(node!.right))

    //     return output
    const inorder = (root, output) => {

        if(root !== null){
            inorder(root.left, output)
            output.push(root.val)
            inorder(root.right,output)
        }
    }
        
        let output = []
        inorder(root, output)

        return output
}



                      //PROBLEM No.102(Binary Tree Level Order Traversal)
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
                          
function levelOrder(root: TreeNode | null): number[][] {
    const result: number[][] = [];

    if (root === null) {
        return result
    }

    const queue: TreeNode[] = [root];
    
    while (queue.length > 0) {
        const level = queue.length;
        const currentLevel: number[] = [];
        
        for (let i = 0; i < level; i++) {
            const node = queue.shift()!;
            currentLevel.push(node.val);
            
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        
        result.push(currentLevel)
    }
    
    return result
}
// result is initialized as an empty array of arrays (number[][]).
// function checks if root is null at the beginning and returns the empty result if it  is.
// A queue is initialized with the root node.
// The while loop runs as long as there are nodes in the queue. For each level, it processes all nodes currently in the queue, records their values, and enqueues their left and right children if they exist.
// The values of each level are stored in currentLevel, which is then pushed to result.


                  //PROBLEM No.144(Binary Tree PreOrder Traversal)
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

function preorderTraversal(root: TreeNode): number[] {
    const preorder = (root, output) => {

       if(root !== null){
            output.push(root.val)
           preorder(root.left, output)
           preorder(root.right,output)
       }
   }
       
       let output = []
       preorder(root, output)

       return output
}

                 //PROBLEM No.145(Binary Tree PostOrder Traversal)
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

function postorderTraversal(root: TreeNode | null): number[] {
    const postorder = (root, output) => {

        if(root !== null){
        postorder(root.left, output)
         postorder(root.right,output)
        output.push(root.val)


        }
    }
        let output = []
        postorder(root, output)
        return output
};

                 //PROBLEM No.450(Delete Node in a BST)
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
 
function deleteNode(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) { //if there is no root, return null
          return null;
      }
  
      if (val < root.val) { //if the value o node is less than the root value, recurse left subtree(if it is greater, do the right subtree)
          root.left = deleteNode(root.left, val);
      } else if (val > root.val) {
          root.right = deleteNode(root.right, val);
      } else { //if the node to be deleted does not have left, return the right and if the node to be deleted does not have right, return the left
          if (root.left === null) {
              return root.right;
          } else if (root.right === null) {
              return root.left;
          }

          function minimumValue(node:TreeNode){ //finding the minimum value
            let current = node;
            while (node.left !== null) {
                node = node.left;
            }
            return node.val;
        }
          //if it has both left and right, find the minimum value in the right subtree and replace the node value to be deleted with the minimum value then delete the delte minimum value
          root.val = minimumValue(root.right);
          root.right = deleteNode(root.right, root.val);
      }
      return root;
  }

  