import { Node } from "./node";

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
}
