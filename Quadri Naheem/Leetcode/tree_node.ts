
  class TreeNodeLeetcode {
      val: number
      left: TreeNodeLeetcode | null
      right: TreeNodeLeetcode | null
      constructor(val?: number, left?: TreeNodeLeetcode | null, right?: TreeNodeLeetcode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 