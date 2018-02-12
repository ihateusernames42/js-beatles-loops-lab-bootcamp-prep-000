function theBeatlesPlay(m, x){
  temp = []
  for (i=0; i<4; i++){
    temp.push('${m[i]} plays ${x[i]}')
  }
  return temp
}