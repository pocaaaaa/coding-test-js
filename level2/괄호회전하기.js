/*
    [문제]
    다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.
    (), [], {} 는 모두 올바른 괄호 문자열입니다.

    만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 
    예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.

    만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 
    예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
    
    대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 
    이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

    [제한사항]
     1. s 의 길이는 1 이상 1,000 이하입니다.
*/

const solution = (s) => {
    const words = s.split("");
    let count = 0;
    
    // 홀수이면 어떤 방식이든 올바른 괄호가 나올 수 없음. 
    if(words.length % 2 !== 0) return 0;
    
    for(let i=0; i<words.length; i++) {
        let word = words.join("");
        words.push(words.shift());
        
        // 첫번째 문자가 닫힌 괄호이면 해당 조건은 올바른 괄호문이 될 수 없음. 
        if(word[0] === "}" || word[0] === "]" || word[0] === ")") continue;
        
        while(1) {
            if(word.match(/(\(\))|(\[\])|(\{\})/gi)) {
                word = word.replace(/(\(\))|(\[\])|(\{\})/gi, '');
            } else {
                count += !word.length ? 1 : 0;
                break;
            }
        };
    };
    
    return count;
};

console.log(solution("[](){}"));    // 3
console.log(solution("}]()[{"));    // 2
console.log(solution("[)(]"));      // 0
console.log(solution("}}}"));       // 0