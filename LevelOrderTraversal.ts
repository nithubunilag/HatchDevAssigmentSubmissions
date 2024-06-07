function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    
    let q: TreeNode[] = [root];
    let ans: number[][] = [];

    while (q.length) {
        let qlen = q.length;
        let row: number[] = [];

        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()!;
            row.push(curr.val);
            if (curr.left) q.push(curr.left);
            if (curr.right) q.push(curr.right);
        }

        ans.push(row);
    }

    return ans;
};