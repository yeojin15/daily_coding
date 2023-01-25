function solution(quiz) {
    const splited = quiz.map((n)=>n.split(' = '));
    return splited.map((item)=>{
        return eval(item[0])===eval(item[1]) ? 'O' : 'X'    
    })
    
    
    
}