const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value === undefined) this.chain.push('( )');
    else this.chain.push('( ' + value + ' )'); 
    return this;
  },
  removeLink(position) {
  if(!isFinite(position) || (position % 1 != 0) || (position-1 < 0) || (position > this.chain.length)){
    this.chain = [];
    throw new Error;
  }else this.chain.splice(position-1, 1);
  return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = '';
    str += this.chain.splice(0,1);
    for(let i = 0; i < this.chain.length; )
      str += '~~' +  this.chain.splice(i,1);
    return str;
  }
}; 
module.exports = chainMaker;
