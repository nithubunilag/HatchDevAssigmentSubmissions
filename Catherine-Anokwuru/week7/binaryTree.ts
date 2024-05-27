// name - Catherine Ihuoma Anokwuru
// email - catherineanokwuru@gmail.com
// github - Catherine-Anokwuru

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

  constructor() {
    this.root = null;
  }

  insert(val: T) {
    const newNode = new TNode(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    let queue: TNode<T>[] = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let current = queue.shift();

      if (current!.lp === null) {
        current!.lp = newNode;
        return;
      } else if (current!.rp === null) {
        current!.rp = newNode;
        return;
      } else {
        queue.push(current!.lp);
        queue.push(current!.rp);
      }
    }
  }

  traverse(): T[] {
    if (!this.root) {
      return[];
    }

    let queue: TNode<T>[] = [];
    queue.push(this.root);

    let travArr: T[] = [];

    while (queue.length > 0) {
      let node = queue.shift();

        travArr.push(node!.data);
        if (node!.lp) {
          queue.push(node!.lp);
        }
        if (node!.rp) {
          queue.push(node!.rp);
        }
    }
    return travArr;
  }


}

const tree = new BT()
tree.insert('a')
tree.insert('b')
tree.insert('c')
tree.insert('d')
console.log(tree.traverse());

