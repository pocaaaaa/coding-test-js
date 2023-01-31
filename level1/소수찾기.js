/*
    [문제]
    1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
    소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
    (1은 소수가 아닙니다.)

    [제한사항]
     1. n은 2이상 1000000이하의 자연수입니다.
*/

console.log(solution(10)); // 4 - 
console.log(solution(5));  // 3

function solution(n) {
    const grid = Array(n+1).fill().map((arr, i) => i);

    for(let i=2; i<=grid.length; i++) {
        for(let j=i*2; j<=grid.length; j+=i) {
            grid[j] = 0;
        }
    }

    return grid.filter((item) => item != 0 && item != 1).length;
}