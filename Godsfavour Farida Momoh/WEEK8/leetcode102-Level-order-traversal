//LEETCODE QUESTION 102
function levelOrder(root: TreeNode | null): number[][] {
    if(root == null){
        return [];
    }
    
    const queue: TreeNode[] = [];
    const result: number[][] = [];

    //add the root to queue
    queue.push(root);

    while(queue.length > 0){
   
        let cache : number[] = [];
        let levelNodes: number = queue.length

        for(let i = 0; i < levelNodes; i++){
            let curr: TreeNode = queue.shift();
            cache.push(curr.val)

            if(curr.left){
                queue.push(curr.left)
            }

            if(curr.right){
                queue.push(curr.right)
            }
        }
        
        result.push(cache);

    }
    return result
    
};
