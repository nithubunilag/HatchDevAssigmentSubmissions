preOrderRecursion(node:TNode| null){
    if(!node) return [];
    let output:T[] = [];
    output.push(node?.value!);
    output.push(...this.preOrder(node!.left));
    output.push(...this.preOrder(node!.right));
    return output;
};

inOrderRecursion(node:TNode| null){
    if(!node) return [];
    let output:T[] = [];
    output.push(...this.inOrder(node!.left));
    output.push(node?.value!);
    output.push(...this.inOrder(node!.right));
    return output;
};

postOrderRecursion(node:TNode| null){
    if(!node) return [];
    let output:T[] = [];
    output.push(...this.inOrder(node!.left));
    output.push(node?.value!);
    output.push(...this.inOrder(node!.right));
    return output;
};