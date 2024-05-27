// preOrder P -> L -> R
// inOrder L -> P -> R
// postOrder L -> R -> P

// assignment david's method

// in-order
class ITreeNode {
    constructor(
      public data: number,
      public left: ITreeNode | null = null,
      public right: ITreeNode | null = null
    ) {}
  }
  
  class ITraversal {
    transverse(node: ITreeNode | null): number[] {
      if (!node) return [];
  
      let output: number[] = [];
      output.push(node.data);
      output.push(...this.transverse(node.left));
      output.push(...this.transverse(node.right));
      return output;
    }
  }
  
  // Example of Usage:
  const iroot = new ITreeNode(1);
  const inodeA = new ITreeNode(2);
  const inodeB = new ITreeNode(3);
  const inodeC = new ITreeNode(4);
  const inodeD = new ITreeNode(5);
  const inodeE = new ITreeNode(6);
  
  // Connecting nodes
  iroot.left = inodeA;
  iroot.right = inodeB;
  inodeA.left = inodeC;
  inodeA.right = inodeD;
  inodeB.left = inodeE;
  
  const inOrderTransversedTree = new ITraversal();
  console.log(inOrderTransversedTree.transverse(iroot));
  
  
  // Pre order
  class PreTreeNode {
    constructor(
      public data: number,
      public left: PreTreeNode | null = null,
      public right: PreTreeNode | null = null
    ) {}
  }
  
  class PreTraversal {
    transverse(node: PreTreeNode | null): number[] {
      if (!node) return [];
  
      let output: number[] = [];
      output.push(...this.transverse(node.left));
      output.push(node.data);
      output.push(...this.transverse(node.right));
      return output;
    }
  }
  
  // Example of Usage:
  const preRoot = new PreTreeNode(1);
  const preNodeA = new PreTreeNode(2);
  const preNodeB = new PreTreeNode(3);
  const preNodeC = new PreTreeNode(4);
  const preNodeD = new PreTreeNode(5);
  const preNodeE = new PreTreeNode(6);
  
  // Connecting nodes
  preRoot.left = preNodeA;
  preRoot.right = preNodeB;
  preNodeA.left = preNodeC;
  preNodeA.right = preNodeD;
  preNodeB.left = preNodeE;
  
  const preTransversedTree = new PreTraversal();
  console.log(preTransversedTree.transverse(preRoot));
  
  //  Post-Order
  class PostTreeNode {
    constructor(
      public data: number,
      public left: PostTreeNode | null = null,
      public right: PostTreeNode | null = null
    ) {}
  }
  
  class PostTraversal {
    transverse(node: PostTreeNode | null): number[] {
      if (!node) return [];
  
      let output: number[] = [];
      output.push(...this.transverse(node.left));
      output.push(...this.transverse(node.right));
      output.push(node.data);
      return output;
    }
  }
  
  // Example of Usage:
  const postRoot = new PostTreeNode(1);
  const postNodeA = new PostTreeNode(2);
  const postNodeB = new PostTreeNode(3);
  const postNodeC = new PostTreeNode(4);
  const postNodeD = new PostTreeNode(5);
  const postNodeE = new PostTreeNode(6);
  
  // Connecting nodes
  postRoot.left = postNodeA;
  postRoot.right = postNodeB;
  postNodeA.left = postNodeC;
  postNodeA.right = postNodeD;
  postNodeB.left = postNodeE;
  
  const postTransversedTree = new PostTraversal();
  console.log(postTransversedTree.transverse(postRoot));