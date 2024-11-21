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
function postorderTraversal(root: TreeNode | null): number[] {
    const postorder = (root, out) => {
        if(root !== null){
            
            postorder(root.left, out)
            postorder(root.right, out)
            out.push(root.val)
        }
    }
    let out = []
    postorder (root,out)

    return out
};
