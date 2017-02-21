"use strict";
module.exports = class Stack {
  constructor() {
   this.ARR = []; 
  }
  insert(node) {
   this.ARR.push(node) 
  }
  remove(node) {
   var ind = this.ARR.indexOf(node)
   
   if (ind == -1) return false;
    this.ARR.splice(ind,1)
    return true;
  }
  peek() {
    return this.ARR[this.ARR.length - 1]
  }
  pop() {
   this.ARR.pop() 
  }
    
}
