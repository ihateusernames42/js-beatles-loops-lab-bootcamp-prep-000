function theBeatlesPlay(m, x){
  var temp = []
  for (var i=0; i<4; i++){
    temp.push('${m[i]} plays ${x[i]}')
  }
  return temp
}