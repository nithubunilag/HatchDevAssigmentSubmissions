//Name: Ajayi Odunayo Mayowa
//email: odunayoajayi2004@gmail.com
//github: odunayo222

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function inorderTraversal(root: TreeNode | null): number[] {
    const inorder = (root, out) => {
        if(root !== null){
            inorder(root.left, out)
            out.push(root.val)
            inorder(root.right, out)
        }
    }
    let out = []
    inorder (root,out)

    return out
};
