function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;
    
      const queue: [TreeNode, TreeNode][] = [[root.left!, root.right!]];
    
      while (queue.length) {
    
        for (let i = 0; i < queue.length; i++) {
          const [leftNode, rightNode] = queue.shift()!;
    
          if (!leftNode && !rightNode) continue;
          if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;
    
          queue.push([leftNode.left!, rightNode.right!]);
          queue.push([leftNode.right!, rightNode.left!]);
        }
      }
    
      return true;
    };