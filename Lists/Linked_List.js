"use strict"
/*
No license here!

*/

class Root {
 constructor() {
   
 }
  forEach() {
    
  }
  every() {
   return true; 
  }
  delete() {
   return false; 
  }
  
}

class ListNode {
 constructor(child,node) {
   this.CHILD = child;
   this.NODE = node;
 }
 destroy() {
  
   this.CHILD = this.CHILD.CHILD;
   return true;
 }
  forEach(call) {
    call(this.NODE);
    this.CHILD.forEach(call);
    
  }
  delete(node) {
    if (this.CHILD.NODE == node) return this.destroy();
    return this.CHILD.delete(node);
  }
  every(call) {
    if (!call(this.NODE)) return false;
    return this.CHILD.forEach(call);
  }
  
}
module.exports = class LinkedList {
 constructor() {
 }
  set(node) {
    var n = new ListNode(this.CHILD,node)

    this.CHILD = n;
    return n;
  }
  delete(node) {
if (this.CHILD.NODE == node) return this.destroy();
    return this.CHILD.delete(node);
  }
  forEach(call) {
    this.CHILD.forEach(call)
  }
  every(call) {
    return this.CHILD.every(call)
  }

}
