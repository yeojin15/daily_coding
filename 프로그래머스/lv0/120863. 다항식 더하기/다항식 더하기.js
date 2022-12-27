function solution(polynomial) {
    let arr = polynomial.split(' + ')
  
  let xcal = arr.filter(item=> item.includes('x'))
  let xSum = xcal.map(item=>item.replace('x','')).map(item=> item===''? 1 : parseInt(item));
  let xResult = 0
  if(xSum.length!==0){
    xResult = xSum.reduce((acc, cur)=> acc+cur)
  }else {
    xResult = 0
  }
  if(xResult===1) xResult=''

  
  let numSum = arr.filter(item=> !item.includes('x')).map(item=>parseInt(item));
  let numResult = 0;
  if(numSum.length!==0){
    numResult=numSum.reduce((acc,cur)=>acc+cur)
  }else{
    numResult = 0;
  }

  let answer = `${xResult}x + ${numResult}`
  const lastChar = answer.at(-1);
  const firstChar = answer.charAt(0);

  if(lastChar==='0'){
    answer = answer.split(' + 0').join('')
  }
  if(firstChar==='0'){
    answer = answer.split('0x + ').join('')
  }

  return answer
}