//in-order traversal
class treeNode<T>{
    value:T
    left: treeNode<T> | null 
    right: treeNode<T> | null

    constructor(value:T, left:treeNode<T>|null = null , right:treeNode<T>|null = null){
        this.value = value
        this.left = left
        this.right = right
    }
}

class Tree{
    root:treeNode<number>|null
    result: number [] = []


    traverse(value:T){
        if(value === null) return;
        this.result.push(value.value)
        this.traverse(this.root?.left)
}