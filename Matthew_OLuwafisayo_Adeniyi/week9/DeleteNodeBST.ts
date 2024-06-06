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
 

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        }

        let successor = root.right;
        while (successor.left) {
            successor = successor.left;
        }

        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }

    return root;
}


const root = new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6, null, new TreeNode(7)));
const key = 3;
console.log(deleteNode(root, key));