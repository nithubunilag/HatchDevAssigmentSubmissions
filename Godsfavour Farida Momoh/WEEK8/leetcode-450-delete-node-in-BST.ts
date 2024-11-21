function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if(!root){
        return null;
    }

    root = nodeDelete(key, root)

    return root
    
};

//assuming we are taking in right, so we search to left of our right subtree to get "biggest small"
function findMinNode(node:TreeNode){
    if (node.left == null){
        return node;
    }
    return findMinNode(node.left);

}


function nodeDelete(key :number, node: TreeNode | null){
    //Base case
    if(!node){
        return node;
    }

    if(key < node.val){
        node.left = nodeDelete(key, node.left)
        return node;
    }
    else if(key > node.val){
        node.right = nodeDelete(key, node.right)
        return node;
    }
    else{
        //check if has no child, delete
        if((node?.left == null) && (node?.right == null)){
            node = null;
            return node;
        }
        //if has one child left, switch and then delete(node will be returned, its not null but now the recursive search
        //will delete at the bottom of the tree)
        else if(node.left == null){
            node = node.right;
            return node;
        }
        else if(node.right == null){
            node = node.left;
            return node;
        }
        else{
            // Both parents present
            //If we made it here it means the val == node.val
            //find smallest value in right subtree,  and switch

            const minNode = findMinNode(node.right);
            node.val = minNode.val;

            //now delete
            node.right = nodeDelete(minNode.val, node.right);
            return node;
        }

    };

        return node;
    };

