function levelOrder(root: TreeNodeLeetcode | null): number[][] {
    let result: number[][] = [];
   
   if (root === null) {
       return result;
   }

   let queue: TreeNodeLeetcode[] = [root];
   
   while (queue.length > 0) {
       let levelSize = queue.length;
       let currentLevel: number[] = [];
       
       for (let i = 0; i < levelSize; i++) {
           let currentNode = queue.shift()!;
           currentLevel.push(currentNode.val);
           
           if (currentNode.left !== null) {
               queue.push(currentNode.left);
           }
           
           if (currentNode.right !== null) {
               queue.push(currentNode.right);
           }
       }
       
       result.push(currentLevel);
   }
   
   return result;
};