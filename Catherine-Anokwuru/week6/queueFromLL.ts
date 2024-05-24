class LNode<T>{
  data: T
  next: LNode<T> | null

  constructor(val: T){
    this.next = null
    this.data = val
  }
}

class LList<T>{
  head: LNode<T> | null

  constructor(){
    this.head = null
  }

  add(val: T){
    const newNode = new LNode(val)
    if(!this.head){
      this.head = newNode
      return
    }

    let currentNode = this.head
    while (currentNode.next){
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }

  print(){
    let node = this.head
    while(node){
      console.log(`value: ${node.data}: next: ${node.next?.data}`)
      node = node.next
    }
  }
}

const list = new LList()
list.add('a')
list.add('b')
list.add('c')
list.print()

