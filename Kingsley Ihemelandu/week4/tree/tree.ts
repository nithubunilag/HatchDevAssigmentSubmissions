export class Node<T> {
  public data: T;
  public left: Node<T> | null = null;
  public right: Node<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class BinaryTree<T> {
  private root: Node<T> | null = null;

  // Search for a value in the tree
  public search(value: T): boolean {
    let currentNode: Node<T> | null = this.root;
    while (currentNode !== null) {
      if (value === currentNode.data) {
        return true;
      } else if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  // Pre-order traversal (root, left, right)
  public preOrderTraversal(node: Node<T> | null = this.root): void {
    if (node !== null) {
      console.log(node.data); // Process the node's data
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  // In-order traversal (left, root, right)
  public inOrderTraversal(node: Node<T> | null = this.root): void {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.data); // Process the node's data
      this.inOrderTraversal(node.right);
    }
  }

  // Post-order traversal (left, right, root)
  public postOrderTraversal(node: Node<T> | null = this.root): void {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.data); // Process the node's data
    }
  }

  // Level-order traversal (using a queue)
  public levelOrderTraversal(): void {
    if (this.root === null) {
      return;
    }

    const queue: Node<T>[] = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const currentNode = queue.shift()!; // Non-null assertion as we check for empty queue

      console.log(currentNode.data); // Process the node's data

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }

  // Get the children of a node
  public getChildren(node: Node<T> | null): Array<Node<T>>|null {
    if (node === null) return null;
    if (node.left instanceof Node && node.right instanceof Node) return [node.left, node.right];
    return null
  }

  // Get the parent of a node (assuming parent-child links are maintained)
  public getParent(node: Node<T> | null): Node<T> | null {
    if (this.root === null || node === null || node === this.root) {
      return null;
    }

    let currentNode: Node<T> | null = this.root;
    const queue: Node<T>[] = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift()!; // Non-null assertion as we check for empty queue

      if (currentNode.left === node || currentNode.right === node) {
        return currentNode;
      }

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    return null; // Node not found in the tree
  }
}