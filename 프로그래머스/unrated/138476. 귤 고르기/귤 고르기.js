 function solution(k, tangerine) {
      let cnt = 0;
      let arr = tangerine.slice();
      let obj = {};
      for (e of arr) {
        if (e in obj) {
          obj[e]++;
        } else {
          obj[e] = 1;
        }
      }
      // (2) 키값의 합으로 k만들기
      // [1, 2, 2, 1, 2] -> [1, 1, 2, 2, 2] -> [2, 2, 2, 1, 1]
      let newArr = Object.values(obj).sort((a, b)=>b-a)
    
      // (3) sort로 정렬해서 k와 처음부터 비교(큰수부터) 같거나 작아지는 순간 셈에 더함.
      for (e of newArr) {

          k -= e;
          cnt += 1;
        if (k <= 0) {
          return cnt;
        }
      }

    }
    