class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        // this.first = null;
        // this.last = null;
        // this.size = 0;

        this.nodes = [];
        this.size = this.nodes.length;
    }

    push(item) {
        let newNode = new Node(item);
        this.nodes.push(newNode);
        // if (!this.first) {
        //     this.first = newNode;
        //     this.last = newNode;
        // } else {
        //     let temp = this.first;
        //     this.first = newNode;
        //     this.first.next = temp;
        // }
        // return ++this.size;
    }

    pop() {
        this.nodes.pop();
        // if (!this.first) return null;
        // var temp = this.first;
        
        // if (this.first === this.last) {
        //     this.last = null;
        // } 
        // this.first = this.first.next;
        // this.size--;
        // return temp.value;
    }

    peek () {
        const lastIndex = this.nodes.length;
        return this.nodes[lastIndex - 1]?.value ?? 'Empty stack';
    }
}
