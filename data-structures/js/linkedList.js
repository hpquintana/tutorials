//https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571

class LinkedList {
    constructor(...values) {
        this.head = null;
        this.length = 0;
        this.addToHead(...values);
    }
    
    _addSingleItemToHead(value) {
        const newNode = { value };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    addToHead(...values) {
        values.forEach(value => this._addSingleItemToHead(value));
        return this;
    }
    
    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }
        
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        
        return value;
    }

    reverse(){
        //can only reverse if length > 1
        if(this.length > 1){
            //copy over the current element (1st)
            let previousNode = null;
            let currentNode = this.head;
            let nextNode = null;

            while(currentNode) { //keep going until we reach the end

                //save the next node in the chain
                nextNode = currentNode.next;
                //reverse the order of the current node
                currentNode.next = previousNode;

                //move on to the next node
                previousNode = currentNode;
                currentNode = nextNode;
            }

            //point head to the new start
            this.head = previousNode;
        }
    }
    
    find(val) {
        let thisNode = this.head;
        
        while(thisNode) {
            if(thisNode.value === val) {
                return thisNode;
            }
            
            thisNode = thisNode.next;
        }
        
        return thisNode;
    }
    
    remove(val) {
        if(this.length === 0) {
            return undefined;
        }
        
        if (this.head.value === val) {
            return this.removeFromHead();
        }
        
        let previousNode = this.head;
        let thisNode = previousNode.next;
        
        while(thisNode) {
            if(thisNode.value === val) {
                break;
            }
            
            previousNode = thisNode;
            thisNode = thisNode.next;
        }
        
        if (thisNode === null) {
            return undefined;
        }
        
        previousNode.next = thisNode.next;
        this.length--;
        return this;
    }
}

function printList(list){
    let temp = list.head;

    while(temp){
        console.log(temp.value);
        temp = temp.next;
    }
}

var list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third');

printList(list);

list.reverse();

printList(list);
