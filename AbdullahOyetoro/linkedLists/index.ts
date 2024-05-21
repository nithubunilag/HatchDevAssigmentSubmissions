class LNode<T>{
  data:T
  next:LNode<T>
  constructor(val:T){
    this.data = val
  }
}

class CircularLinkedList<T>{
  head: LNode<T>
  private getcurrentNode(position?:number){
    let currentNode = this.head
    if(position){
      let currentPosition = 0
      while(currentPosition !== position){
        if(currentNode.next == this.head){
          console.log(`the loop has reached the tail and the linked list has ${currentPosition} nodes`)
        }
        else if (currentPosition == position-1){
          console.log(`its reached the position before the desired node`)
          return currentNode
        }
        currentNode = currentNode.next;
        position++
      }
    }
    else{
      while(currentNode.next !==this.head){
        currentNode = currentNode.next
      }
      //if the while loop runs we are at the last node whose next node is the head
      return currentNode
    }
    return currentNode
  }
  append(val:T){
    //if no head
    let newNode = new LNode(val)


    
    if(!(this.head)){
      this.head = newNode
      this.head.next = this.head;//adding the to the next to make it circular
      return
    }
    //if theres a head
    let currentNode = this.getcurrentNode();
    //this calls the getcurrenet node function which gets the last node
    //the node whose next node points to the head
    currentNode.next = newNode
    currentNode = currentNode.next
    currentNode.next = this.head
  }
}

const clist2 = new CircularLinkedList<string>()
clist2.append("quo")
clist2.append("quid")
clist2.append("pro")
clist2.append("stop")

console.log(clist2)