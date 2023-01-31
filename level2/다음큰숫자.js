/*
    [문제]
    자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

    조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
    조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
    조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
    
    예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

    자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.

    [제한사항]
     1. n은 1,000,000 이하의 자연수 입니다.
*/

const getLength = (number) => {
    const bin = number.toString(2);
    let length = 0;

    for(let i=0; i<bin.length; i++) {
        if(bin[i] === "1") length++;
    };

    return length;
};

const solution = (n) => {
    let result = 0;
    const target = getLength(n);

    while(!result) {
        n++;
        if(target === getLength(n)) {
            result = n;  
        };
    };

    return result;
};

console.log(solution(78));  // 83
console.log(solution(15));  // 23