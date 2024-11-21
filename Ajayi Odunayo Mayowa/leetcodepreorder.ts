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

function preorderTraversal(root: TreeNode | null): number[] {
    const preorder = (root, out) => {
        if(root !== null){
            out.push(root.val)
            preorder(root.left, out)
            preorder(root.right, out)
        }
    }
    let out = []
    preorder (root,out)

    return out
};
