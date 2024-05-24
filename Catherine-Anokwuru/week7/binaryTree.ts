class TNode<T> {
  data: T;
  lp: TNode<T> | null;
  rp: TNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.lp = null
    this.rp = null
  }
}

class BT<T> {
  root: TNode<T> | null;
  //  queue: []
  // travArr: [];

  constructor() {
    this.root = null;
    // this.queue = this.queue.push(this.root)
  }
  

  traverse() {
    if (!this.root) {
      return;
    }

    let queue: TNode<T>[] = [];
    queue.push(this.root);

    let travArr: TNode<T>[] = [];

    while (queue.length > 0) {
      // let removedNode = queue.unshift()
      let node = queue.shift();

      if (node) {
        travArr.push(node);
        if (node.lp) {
          queue.push(node.lp);
        }
        if (node.rp) {
          queue.push(node.rp);
        }
      }
    }

    return travArr;
  }
}
