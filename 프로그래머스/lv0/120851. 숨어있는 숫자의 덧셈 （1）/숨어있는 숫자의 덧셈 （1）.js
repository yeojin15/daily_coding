function solution(my_string) {
    
    let nums = my_string.match(/[0-9]/g);
    return nums.map((item)=> Number(item)).reduce((acc,cur)=>acc+cur)
    
}