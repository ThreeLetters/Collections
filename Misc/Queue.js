"use strict";
module.exports = class Queue {
 constructor() {
  this.ARR = []; 
 }
  getLen() {
   return this.ARR.length
  }
 insert(node) {
   this.ARR.push(node)
 }
  remove(node) {
    if (!this.ARR.length) return false;
    var ind = this.ARR.indexOf(node)
    if (!ind) return false;
    this.ARR.splice(ind,1);
  }
  peek() {
    return this.ARR[0];
  }
  
  
}
