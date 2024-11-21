function levelOrder(root: TreeNode | null): number[][] {
    let output = []

    const LevelOrder = (root, level) => {
        if(root == null) {
            return output
        }
        else {
            if (output.length === level) {
                output.push([]);
            }
            output[level].push(root.val)
            
            LevelOrder(root.left, level + 1)
            LevelOrder(root.right, level + 1)
            
        }
    }   

    LevelOrder(root, 0)
    return output
};