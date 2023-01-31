/*
    [문제]
    괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 
    
    예를 들어   "()()" 또는 "(())()" 는 올바른 괄호입니다.
                ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
   
    '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 
    올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

    [제한사항]
     1. 문자열 s의 길이 : 100,000 이하의 자연수
     2. 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
*/

console.log(solution("()()"));      // true
console.log(solution("(())()"));    // true
console.log(solution(")()("));      // false
console.log(solution("(()("));      // false

function solution(s){
    const array = new Array();
    const isOddNumber = s.length % 2;

    if(!isOddNumber) {
        for(let i=0; i<s.length; i++) {
            if(array.length > 0 && array[array.length-1] === "(" && s[i] === ")") {
                array.pop();
            } else {
                array.push(s[i]);
            }
        }
    }

    return !(isOddNumber || array.length > 0);
}
