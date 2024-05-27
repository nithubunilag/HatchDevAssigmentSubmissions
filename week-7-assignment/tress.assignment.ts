// Assignment - My version
// preOrder P -> L -> R
// inOrder L -> P -> R
// postOrder L -> R -> P

// assignment david's method

// in-order
class InOrderTreeNode {
  constructor(
    public data: number,
    public left: InOrderTreeNode | null = null,
    public right: InOrderTreeNode | null = null
  ) {}
}

class InOrderTraversal {
  transverse(node: InOrderTreeNode | null): number[] {
    if (!node) return [];

    let output: number[] = [];
    output.push(node.data);
    output = output.concat(this.transverse(node.left));
    output = output.concat(this.transverse(node.right));
    return output;
  }
}

// Example of Usage:
const iroot = new InOrderTreeNode(10);
const inodeA = new InOrderTreeNode(42);
const inodeB = new InOrderTreeNode(36);
const inodeC = new InOrderTreeNode(34);
const inodeD = new InOrderTreeNode(50);
const inodeE = new InOrderTreeNode(62);

// Connecting nodes
iroot.left = inodeA;
iroot.right = inodeB;
inodeA.left = inodeC;
inodeA.right = inodeD;
inodeB.left = inodeE;

const inOrderTransversedTree = new InOrderTraversal();
console.log(inOrderTransversedTree.transverse(iroot));


// Pre order
class PreOrderTreeNode {
  constructor(
    public data: number,
    public left: PreOrderTreeNode | null = null,
    public right: PreOrderTreeNode | null = null
  ) {}
}

class PreOrderTraversal {
  transverse(node: PreOrderTreeNode | null): number[] {
    if (!node) return [];

    let output: number[] = [];
    output = output.concat(this.transverse(node.left));
    output.push(node.data);
    output = output.concat(this.transverse(node.right));
    return output;
  }
}

// Example of Usage:
const preRoot = new PreOrderTreeNode(10);
const preNodeA = new PreOrderTreeNode(42);
const preNodeB = new PreOrderTreeNode(36);
const preNodeC = new PreOrderTreeNode(34);
const preNodeD = new PreOrderTreeNode(50);
const preNodeE = new PreOrderTreeNode(62);

// Connecting nodes
preRoot.left = preNodeA;
preRoot.right = preNodeB;
preNodeA.left = preNodeC;
preNodeA.right = preNodeD;
preNodeB.left = preNodeE;

const preTransversedTree = new PreOrderTraversal();
console.log(preTransversedTree.transverse(preRoot));

//  Post-Order
class PostOrderTreeNode {
  constructor(
    public data: number,
    public left: PostOrderTreeNode | null = null,
    public right: PostOrderTreeNode | null = null
  ) {}
}

class PostOrderTraversal {
  transverse(node: PostOrderTreeNode | null): number[] {
    if (!node) return [];

    let output: number[] = [];
    output = output.concat(this.transverse(node.left));
    output = output.concat(this.transverse(node.right));
    output.push(node.data);
    return output;
  }
}

// Example of Usage:
const postRoot = new PostOrderTreeNode(10);
const postNodeA = new PostOrderTreeNode(42);
const postNodeB = new PostOrderTreeNode(36);
const postNodeC = new PostOrderTreeNode(34);
const postNodeD = new PostOrderTreeNode(50);
const postNodeE = new PostOrderTreeNode(62);

// Connecting nodes
postRoot.left = postNodeA;
postRoot.right = postNodeB;
postNodeA.left = postNodeC;
postNodeA.right = postNodeD;
postNodeB.left = postNodeE;

const postTransversedTree = new PostOrderTraversal();
console.log(postTransversedTree.transverse(postRoot));
























// //  Post-Order
// class TreeNode {
//   constructor(
//     public data: number,
//     public left: TreeNode | null = null,
//     public right: TreeNode | null = null
//   ) {}
// }

// class Traversal {
//   transverse(node: TreeNode | null): number[] {
//     if (!node) return [];

//     let output: number[] = [];
//     // output = output.concat(this.transverse(node.left)); or...
//     output.push(...this.transverse(node.left));
//     // output = output.concat(this.transverse(node.right)); or...
//     output.push(...this.transverse(node.right));
//     output.push(node.data);
//     return output;
//   }
// }

// // Example of Usage:
// const root = new TreeNode(1);
// const nodeA = new TreeNode(2);
// const nodeB = new TreeNode(3);
// const nodeC = new TreeNode(4);
// const nodeD = new TreeNode(5);
// const nodeE = new TreeNode(6);

// // Connecting nodes
// root.left = nodeA;
// root.right = nodeB;
// nodeA.left = nodeC;
// nodeA.right = nodeD;
// nodeB.left = nodeE;

// const transversedTree = new Traversal();
// console.log(transversedTree.transverse(root));