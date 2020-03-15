module.exports = function createDreamTeam(members) {
  let temp = '', str = '';
  let arr = [];
  let counter = 0;
  if(members == null) return false
  for(let i=0; i < members.length; i++){
    temp=members[i];
    if(typeof members[i] === "string"){
      for(let j=0; j < temp.length; j++){
          if(temp[j] == ' ') counter++;
          else break;
      }
      str += temp[counter];
      counter = 0;
    }
  }
  arr = str.toUpperCase().split('');
  str = arr.sort().join('').toString();
  return str;
};