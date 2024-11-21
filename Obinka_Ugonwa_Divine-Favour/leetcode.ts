// Name: Obinka Ugonwa Divine-Favour
// email: divneobk@gmail.com

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {

    
    if(!root){
        return []
    }

    let travArr: number[][] = []
    let queue: TreeNode[] = [root]

    let currNode: TreeNode;
    while(queue.length > 0){
        
        let initArr: number[] = [] 
        let noOfNodes : number = queue.length
        
        for(let i = 0; i < noOfNodes; i++){
            currNode = queue.shift();
            initArr.push(currNode.val)

            if(currNode.left !== null ){
                queue.push(currNode.left)
            }
            if(currNode.right !== null){
                queue.push(currNode.right)
            }
        }

        travArr.push(initArr)
    }

    return travArr
};

