class my_DmNode {
    value: number;
    left: my_DmNode | null;
    right: my_DmNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// function inOrderTraversal(root: my_DmNode | null): number[] {
//     const result: number[] = [];

//     function traverse(node: my_DmNode | null) {
//         if (node) {
//             result.push(node.value);
//             traverse(node.left);
//             traverse(node.right);
//         }
//     }

//     traverse(root);

//     return result;


function preOrder(node: my_DmNode | null) {

    let output: number[] = [];

    if (!node) return [];
    output.push(node?.value?? 0); //Use of nullish coalescing is used to avoid null or undefined values.
    output.push(...this.preOrder(node!.left));
    output.push(...this.preOrder(node!.right));
    return output;  
}


    function inOrder(node: my_DmNode | null) {

        let output: number[] = [];

        if (!node) return [];

        output.push(...this.inOrder(node!.left));
        output.push(node?.value ?? 0); //nullish coalescing 
        output.push(...this.inOrder(node!.right));
        return output;  
    }



    function postOrder(node: my_DmNode | null) {
        let output: number[] = [];
        if (!node) return [];
        output.push(...this.postOrder(node!.left));
        output.push(...this.postOrder(node!.right));
        output.push(node?.value?? 0); //nullish coalescing 
        return output;
    }

// Usage example:
// const root = new my_DmNode(1);
// root.left = new my_DmNode(2);
// root.right = new my_DmNode(3);
// root.left.left = new my_DmNode(4);
// root.left.right = new my_DmNode(5);

// const result = inOrderTraversal(root);
// console.log(result); Output: [1, 2, 4, 5, 3]