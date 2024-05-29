// let x = 1;
// let y = x++;
// // let z = --y;

// // console.log(x);
// console.log(y);
// console.log(x);

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }


function breadthFirstTraversal(root) {
    if (root === null) {
      return;
    }
  
    const queue = [];
    queue.push(root);
  
    while (queue.length > 0) {
      const node = queue.shift();
      console.log(node.value); 
  
      if (node.left !== null) {
        queue.push(node.left);
      }
  
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
  }
  

const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);


root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node6;


console.log(breadthFirstTraversal(root));
