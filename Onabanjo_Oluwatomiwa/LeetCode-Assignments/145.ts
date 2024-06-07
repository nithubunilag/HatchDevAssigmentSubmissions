function postorderTraversal(root: TreeNode | null): number[] {
        if (root == null) {
            return [];
        }

        let result: number[] = [];
        let stack: TreeNode[] = [];
        let lastVisited: TreeNode |null = null;
        let current: TreeNode | null = root;

        while (current !== null || stack.length > 0) {
            
            while (current != null) {
                stack.push(current);
                current = current.left;
            }

            current = stack[stack.length - 1];

            if (current.right == null || current.right === lastVisited) {
                current = stack.pop()!;
                result.push(current.val);
                console.log(current.val); 
                lastVisited = current;
                current = null;
            } else {
                current = current.right;
            }
        }

        return result;
};