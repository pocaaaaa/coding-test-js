/*
    [문제]
    JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 
    단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
    문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

    [제한사항]
     1. s는 길이 1 이상 200 이하인 문자열입니다.
     2. s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
        1) 숫자는 단어의 첫 문자로만 나옵니다.
        2) 숫자로만 이루어진 단어는 없습니다.
        3) 공백문자가 연속해서 나올 수 있습니다.
*/

console.log(solution("3people unFollowed me")); // 3people Unfollowed Me
console.log(solution("for the last week"));     // For The Last Week

// [출처 URL : https://thisthat.dev/string-char-at-vs-string-bracket-notation/]
// string.charAt(i) vs string[i]
// 공통점 
//   : 둘 다 문자열의 index 위치의 문자를 리턴한다. 
// 차이점 
//   : string[i] 는 ECMA5의 표준이기 때문에 IE6, 7과 같은 오래된 브라우저에서 지원하지 않음. 
function solution(s) {
    return s.toLowerCase()
            .split(" ")
            .map(item => {
                // [1차] 공백이 2개이상인 경우 split으로 배열을 만들었을때 item[0] 에 접근할 때 문제가 발생 → 런타임오류 
                // if(item) {
                //     item = item[0].toUpperCase()+item.substring(1, item.length)
                // }

                // return item;

                // [2차] string.charAt(i) 의 경우 올바르지 않은 index에 접근하면 ""을 리턴하기 때문에 if문이 필요 없음. 
                return item.charAt(0).toUpperCase() + item.substring(1);
                
            })
            .join(" ");
}

'hello'[NaN]; // undefined
'hello'.charAt(NaN); // 'h'

'hello'[undefined]; // undefined
'hello'.charAt(undefined); // 'h'

'hello'[true]; // undefined
'hello'.charAt(true); // 'e' → true를 숫자로 변환하려고 시도. Number(true) === 1 이기 때문에 'hello'.charAt(1) 과 같음. 

'hello'['00']; // undefined

// return 'h' because it will try to convert `00` to number first
'hello'.charAt('00');

'hello'[1.5]; // undefined
// return 'e' because it will round 1.23 to the number 1
'hello'.charAt(1.23);

// In the case the index is out of bounds : 
'hello'[100]; // undefined
'hello'.charAt(100); // ''