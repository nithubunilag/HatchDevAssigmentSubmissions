export class Stack<T> {
  data: T[] = [];

  protected push(val: T) {
    return this.data.push(val);
  }

  pop() {
    return this.data.pop();
  }

  // This shows the last item, or the top of the stack
  peek() {
    return this.data[this.data.length - 1];
  }
}