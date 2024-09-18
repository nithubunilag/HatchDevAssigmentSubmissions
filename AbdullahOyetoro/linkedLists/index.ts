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
    if(!this.head){
      return currentNode
    }
    if(position){
      let currentPosition = 1;
      while(currentPosition !== position){
        if(currentNode.next == this.head){
          console.log(`the loop has reached the tail and the linked list has ${currentPosition} node(s)`)
          return currentNode
        }
        if(position ==-1 && currentNode.next.next ==this.head){
          console.log(`reached the penultimate node at position ${currentPosition}`)
          return currentNode
        }
        
        else if (currentPosition == (position-1)){
          // console.log(`its reached the position before the desired node`)
          return currentNode
        }
        currentNode = currentNode.next;
        currentPosition++
      }  
    }
    else{
      while(currentNode.next&& currentNode.next !==this.head){
        currentNode = currentNode.next
      }
      //if the while loop runs we are at the last node whose next node is the head
      return currentNode
    }
    return currentNode
  }
  getlistlength(){
    if(!this.head){
      return 0
    }
    if(this.head.next == this.head){
      return 1
    }
    let currentLength = 1
    let currentNode =this.head
    while(currentNode.next&& currentNode.next !== this.head){
      currentNode = currentNode.next
      currentLength ++
    }
    return currentLength
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
    return
  }
  prepend(val:T){
    let newNode = new LNode(val);
    let oldHead = this.head;
    if(!this.head){
      this.head = newNode
      this.head.next = newNode
      return
    }
    if(this.head.next ==this.head){
      this.head.next = newNode;
      this.head = newNode
      newNode.next = oldHead
      return
    }
    this.head = newNode
    newNode.next = oldHead
  }
  add(val:T, position?:number){
    if(!this.head){
      let newNode = new LNode(val)
      this.head =newNode
    }
    if(!position){
      this.append(val)
      return
    }
    if (position&& position <=1&&position >=0){
      this.prepend(val)
      return
    }
    let newNode = new LNode(val)
    if(position && position>1){
      let length = this.getlistlength()
      if(position <= length){
        let currentNode = this.getcurrentNode(position);
        newNode.next = currentNode.next
        currentNode.next = newNode
        return 
      }
      else{
        console.log(`Invalid position`)
        return 
      }
    }
  }
  deletebyPosition(position?:number,val?:T){
    if(!this.head ||this.head.next ==this.head){
      return `this cant delete from a list with one node`
    }
    if(!position ||this.head ==this.head.next){
      //automatically deletes from the back
      
      let penultimateNode = this.getcurrentNode(-1)
      penultimateNode.next = this.head
    }
    if(position){
      // this gets the node before the position
      let currentNode = this.getcurrentNode(position)
      if(currentNode.next == this.head){
        console.log('This is the last Node in the list')
        let penultimateNode = this.getcurrentNode(-1)
        penultimateNode.next = currentNode.next
        return
      }
      
      currentNode.next = currentNode.next.next
      
    }
  }
   private getcurrNodeByVal (val:T){
    if(!this.head)return ;
    let currentNode = this.head
    let currentPosition = 1
    while(currentNode.next){
      if(currentNode.data == val)return currentPosition ;
      if(currentNode.next == this.head){
        console.log("reached the end of the linked list")
        break
      }
      currentNode = currentNode.next
      currentPosition++
    }
    if (currentNode == this.head){
      return -2
    } 
  }
  deleteByVal(val:T){
    if(!this.head)return;
    let position =this.getcurrNodeByVal(val)
    if (position&& position !== -2){
      this.deletebyPosition(position)
      return
    }
 }
}

const clist2 = new CircularLinkedList<string>();
clist2.add("quid")
clist2.append("stop")
clist2.add("quo",3);
clist2.add("pro",1);
// clist2.delete()



console.log(clist2.head)

