import { Node } from "./node.js";

export class linkedlist{
    constructor(){
        this.linkhead = null
    }

    prepend(newnode){
        let temp = this.linkhead
        if(this.linkhead==null){
            this.linkhead= new Node(newnode)
        }
        else{
        this.linkhead = new Node(newnode)
        this.linkhead.next=temp
        }
    }

    append(newnode){
        if(this.linkhead==null){
            this.linkhead= new Node(newnode)
        }
        else{
            let temp = this.linkhead
            while(temp.next!==null){
                temp=temp.next
            }
            temp.next= new Node(newnode)
        }
    }

    isstring(){
        let temp = this.linkhead
        let store = ''
        while(temp!==null){
            store = store+temp
            temp=temp.next

        }
        console.log(temp)
    }

    size(){
        let count = 0
        let temp = this.linkhead
        while(temp!==null){
            count+=1
            temp=temp.next

        }
        console.log(count)
    }
}
