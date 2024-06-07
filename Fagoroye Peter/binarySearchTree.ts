class shabala{
    val: number;
    left: shabala | null = null
    right: shabala | null = null
    constructor(val: number){
        this.val = val;
        this.left;
        this.right;
    }
}

class BinarySearchTree{
    root: shabala | null = null

    private insertNode(newNode: shabala, node: shabala){
        if(newNode.val < node.val){
            if(node.left === null){
                node.left = newNode
            }
            else{
                this.insertNode(newNode, node.left)
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(newNode, node.right);
            }
        }
    }

    insert(val: number){
        const newNode = new shabala(val)
        if(this.root === null){
            this.root = newNode;
        }else{
            this.insertNode(newNode, this.root)
        }
    }

    // Deleting from a bst
    findMinNode(node: shabala): shabala{
        if(node.left === null){
            return node;
        }
        return this.findMinNode(node.left);
    }

    delete(val: number) {
        this.root = this.deleteNode(val, this.root!);
    }

    private deleteNode(val: number, node){
        if(node === null){
            return null;
        }

        if(val < node.val){
            node.left = this.deleteNode(val, node.left!);
            return node;
        }else if(val > node.val){
            node.right = this.deleteNode(val, node.right!);
            return node;
        } else{
            if (node.left === null && node.right === null){
                node = null;
                return node;
            }else if(node.left === null){
                node = node.right;
                return node;
            } else if(node.right === null){
                node = node.left;
                return node;
            }
            const minNode = this.findMinNode(node.right);
            node.val = minNode.val;

            node.right = this.deleteNode(minNode.val, node.right);
            return node;
        }  // LEET CODE 450
    }
}