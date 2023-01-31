/*
    [문제]
    신규 유저가 입력한 아이디를 나타내는 new_id가 매개변수로 주어질 때, 
    "네오"가 설계한 7단계의 처리 과정을 거친 후의 추천 아이디를 return 하도록 solution 함수를 완성해 주세요.

    [제한사항]
     1. new_id는 길이 1 이상 1,000 이하인 문자열입니다.
     2. new_id는 알파벳 대문자, 알파벳 소문자, 숫자, 특수문자로 구성되어 있습니다.
     3. new_id에 나타날 수 있는 특수문자는 -_.~!@#$%^&*()=+[{]}:?,<>/ 로 한정됩니다.
*/

console.log(`예시1) ${solution("...!@BaT#*..y.abcdefghijklm")}`);   // bat.y.abcdefghi
console.log(`예시2) ${solution("z-+.^.")}`);                        // z--
console.log(`예시3) ${solution("=.=")}`);                           // aaa
console.log(`예시4) ${solution("123_.def")}`);                      // 123_.def
console.log(`예시5) ${solution("abcdefghijklmn.p")}`);              // abcdefghijklmn
console.log(`==============================`);
console.log(`예시1) ${solution2("...!@BaT#*..y.abcdefghijklm")}`);
console.log(`예시2) ${solution2("z-+.^.")}`);
console.log(`예시3) ${solution2("=.=")}`);
console.log(`예시4) ${solution2("123_.def")}`);
console.log(`예시5) ${solution2("abcdefghijklmn.p")}`);

function solution(new_id) {
    
    // 1단계 : new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
    new_id = new_id.toLowerCase();
    
    // 2단계 : new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
    new_id = new_id.replace(/[^A-Za-z0-9-_.]/gi, '');

    // 3단계 : new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
    new_id = new_id.replace(/\.{2,}/gi, '.');
   
    // 4단계 : new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
    new_id = new_id.replace(/^\.|\.$/gi, '');
    
    // 5단계 :  new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
    if(!new_id) {
        for(let i=0; i<3; i++) {
            new_id += 'a';
        }
    }

    // 6단계 : new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
    //        만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
    new_id = new_id.substr(0, 15);
    new_id = new_id.replace(/\.$/gi, '');

    // 7단계 : new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
    if(new_id.length <= 2) {
        while(new_id.length < 3) {
            new_id += new_id.substr(new_id.length-1, 1);
        }
    }

    return new_id;
}

// [다른 사용자 풀이] 
// String.prototype.padEnd() : 현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
// String.prototype.repeat() : 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환
function solution2(new_id) {
    const id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .padEnd(1, 'a')
        .slice(0, 15)
        .replace(/^\.|\.$/g, '')        
    return id.padEnd(3, id[id.length-1])
}
