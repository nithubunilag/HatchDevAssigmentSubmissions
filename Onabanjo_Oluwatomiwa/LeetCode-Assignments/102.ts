function levelOrder(root: TreeNode | null): number[][] {
    if (root === null){
        return [];
    }
    let queue: TreeNode[] = [];
    let result: number[][] = [];

    queue.push(root);
    while(queue.length > 0){
        let temp: number[] = []
        let size = queue.length;
        for(let i = 0; i < size; i++){
            let current = queue.shift();
            temp.push(current!.val)

            if(current!.left){
                queue.push(current!.left)
            }
            if(current!.right){
                queue.push(current!.right)
            }
        
        }
        result.push(temp)
    } 
    return result
};