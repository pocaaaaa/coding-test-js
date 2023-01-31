/*
    [문제]
    주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
    숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 
    소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

    [제한사항]
     1. nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
     2. nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/

console.log(solution([1,2,3,4]));   // 1
console.log(solution([1,2,7,6,4])); // 4

function solution(nums) {
    let items = new Array();

    for(let i=0; i<nums.length-2; i++) {
        for(let j=i+1; j<nums.length-1; j++) {
            for(let k=j+1; k<nums.length; k++) {
                items.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }

    return items
            .filter((item) => {
                let isPrimeNumber = true;
                // for(let i=2; i<item; i++) {
                // 소수는 제곱근까지만 검사해도 판별 가능. 
                // item의 제곱근보다 작은 수에서 나눠지는 수가 안나온다면 item의 제곱근보다 큰 수에서도 나눠지는 수가 나올 수 없음. 
                for(let i=2; i<=Math.sqrt(item); i++) {
                    if(!(item % i)) {
                        isPrimeNumber = false;
                        break;
                    }
                }
                return isPrimeNumber;
            })
            .length;
}