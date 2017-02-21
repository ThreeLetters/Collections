"use strict"
class Root {
 constructor() {
   
 }
  delete(node) {
   return false; 
  }
  forEach() {
    
  }
  every() {
   return true; 
  }
  
}

class ListNode {
 constructor(child,parent,node) {
   this.CHILD = child;
   this.NODE = node;
   this.PARENT = parent;
 }
 destroy() {
  this.PARENT.CHILD = this.CHILD;
   this.CHILD.PARENT = this.PARENT;
   return true;
 }
  delete(node) {
   if (this.NODE == node) return this.destroy();
    return this.CHILD.delete(node);
  }
  forEach(call) {
    call(this.NODE);
    this.CHILD.forEach(call);
    
  }
  every(call) {
    if (!call(this.NODE)) return false;
    return this.CHILD.forEach(call);
  }
  
}
module.exports = class DoublyLinkedList {
 constructor() {
 }
  insert(node) {
    var n = new ListNode(this.CHILD,this,node)
    this.CHILD.PARENT = n;
    this.CHILD = n;
    return n;
  }
  delete(node) {
    return this.CHILD.delete(node);
  }
  forEach(call) {
    this.CHILD.forEach(call)
  }
  every(call) {
    return this.CHILD.every(call)
  }

}
