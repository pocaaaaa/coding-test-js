/*
    [문제] 
    수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
    수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

    1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
    2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
    3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

    1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
    가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

    [제한사항]
     1. 시험은 최대 10,000 문제로 구성되어있습니다.
     2. 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
     3. 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
*/

const answerTest1 = [1,2,3,4,5];
const answerTest2 = [1,3,2,4,2];

console.log(solution(answerTest1)); // [1]
console.log(solution(answerTest2)); // [1,2,3]

function solution(answers) {
    const user1 = [1, 2, 3, 4, 5];
    const user2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const user3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const answerCountList = [0, 0, 0];

    answers.forEach((answer, index) => {
        if(answer === user1[index % user1.length])  answerCountList[0]++;
        if(answer === user2[index % user2.length])  answerCountList[1]++;
        if(answer === user3[index % user3.length])  answerCountList[2]++;
    });

    return rank(answerCountList);
}

function rank(answerCountList) {
    const maxCount = Math.max(...answerCountList);
    const resultArray = new Array();

    while(answerCountList.includes(maxCount)) {
        resultArray.push(answerCountList.indexOf(maxCount) + 1);
        answerCountList[answerCountList.indexOf(maxCount)] = -1;
    }

    return resultArray;
}