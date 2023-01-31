/*
    [문제]
    두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
    배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 
    예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

    [제한사항]
     1. 두 수는 1이상 1000000이하의 자연수입니다. 
*/

console.log(solution(3, 12));   // [3, 12]
console.log(solution(2, 5));    // [1, 10]
console.log("=============");
console.log(solution2(3, 12));   // [3, 12]
console.log(solution2(2, 5));    // [1, 10]
console.log("=============");
console.log(solution3(3, 12));   // [3, 12]
console.log(solution3(2, 5));    // [1, 10]   

// [1차]
function solution(n, m) {
    const max = (n > m) ? n : m;
    const min = (n > m) ? m : n;
    let copyMax = max;
    let copyMin = min;
    let GCD = 0;

    // 최대공약수
    for(let i=min; i>0; i--) {
        if(!(min % i) && !(max % i)) {
            GCD = i;
            break;
        }
    }

    // 최소공배수
    while(copyMax !== copyMin) {
        if(copyMin < copyMax) copyMin += min;
        else if(copyMin > copyMax) copyMax += max;
    }

    return [GCD, copyMax];
}

 
// [2차] : 유클리드 호제법
// - 최대공약수(GCD) : 최대공약수는 두 자연수의 공통된 약수 중 가장 큰 수
// - 최소공배수(LCM) : 최소공배수는 두 자연수의 공통된 배수 중 가장 작은 수 
//                    최소공배수 = 두 자연수의 곱 / 최대공약수
function solution2(n, m) {
    const max = (n > m) ? n : m;
    const min = (n > m) ? m : n;
    const GCD = mod(max, min);
    const LCM = (max * min) / GCD;
    return [GCD, LCM];
}

function mod(max, min) {
    if(!(max % min)) {
        return min;
    } else {
        return mod(min, max%min);
    }
}

// [3차]
function solution3(n, m) {
    let max = (n > m) ? n : m;
    let min = (n > m) ? m : n;
    let r;
    let gop;
    for(gop=max*min; r=max%min; max=min, min=r) {}
    return [min, gop/min];
}