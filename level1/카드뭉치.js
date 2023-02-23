/*
    [문제] 
    코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다. 
    코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.

    - 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
    - 한 번 사용한 카드는 다시 사용할 수 없습니다.
    - 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
    - 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.
    
    예를 들어 첫 번째 카드 뭉치에 순서대로 ["i", "drink", "water"], 두 번째 카드 뭉치에 순서대로 ["want", "to"]가 적혀있을 때 
    ["i", "want", "to", "drink", "water"] 순서의 단어 배열을 만들려고 한다면 
    첫 번째 카드 뭉치에서 "i"를 사용한 후 두 번째 카드 뭉치에서 "want"와 "to"를 사용하고 
    첫 번째 카드뭉치에 "drink"와 "water"를 차례대로 사용하면 원하는 순서의 단어 배열을 만들 수 있습니다.

    문자열로 이루어진 배열 cards1, cards2와 원하는 단어 배열 goal이 매개변수로 주어질 때, 
    cards1과 cards2에 적힌 단어들로 goal를 만들 있다면 "Yes"를, 만들 수 없다면 "No"를 return하는 solution 함수를 완성해주세요.

    [제한사항]
     1. 1 ≤ cards1의 길이, cards2의 길이 ≤ 10
        - 1 ≤ cards1[i]의 길이, cards2[i]의 길이 ≤ 10
        - cards1과 cards2에는 서로 다른 단어만 존재합니다.
     2. 2 ≤ goal의 길이 ≤ cards1의 길이 + cards2의 길이
        - 1 ≤ goal[i]의 길이 ≤ 10
        - goal의 원소는 cards1과 cards2의 원소들로만 이루어져 있습니다.
     3. cards1, cards2, goal의 문자열들은 모두 알파벳 소문자로만 이루어져 있습니다.

    [후기]
     - 제한사항을 잘 읽어야 할 것 같다. 
     - shift() 가 편하긴 한데 성능상 좋지 않을거 같아서 pop()을 이용해서 제거하기 위해서 reverse()를 사용해서 뒤에서 부터 제거했는데,
       cards1 과 cards2 가 goal보다 단어수가 더 많을 수 있기 때문에 뒤쪽부터 제거했을때 
       앞에서부터 제거한 것과 실행 결과가 다를 수 도 있어서 오류가 발생했던거 같다. (테스트 케이스 20,21,24 에서 계속 오류 발생....)
     - 위의 오류나는 테스트 케이스를 확인할 수 없어서 다른 사용자의 답을 확인하니 제거하는 방향(앞/뒤) 빼고는 코드가 거의 일치해서 해당 부분만 수정했다. 
*/

// [성공]
const solution = (cards1, cards2, goal) => {
    let cards1Idx = 0;
    let cards2Idx = 0;

    return (
            goal.some((item) => {
                if(cards1Idx < cards1.length && cards1[cards1Idx] === item) {
                    cards1Idx++;
                } else if(cards2Idx < cards2.length && cards2[cards2Idx] === item) {
                    cards2Idx++;
                } else {
                    return true;
                }
            })
    ) ? "No" : "Yes";
}

console.log(solution(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));  // Yes
console.log(solution(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]));  // No

// [실패] 
const solution2 = (cards1, cards2, goal) => {
    const isFail = goal.reverse().some((item) => {
        if(cards1.length && cards1[cards1.length-1] === item) {
            cards1.pop();
        } else if(cards2.length && cards2[cards2.length-1] === item) {
            cards2.pop();
        } else {
            return true;
        }
    });
    
    return (isFail) ? "No" : "Yes";
}

console.log(solution2(["i", "drink", "water"], ["want", "to"], ["i", "want", "to", "drink", "water"]));  // Yes
console.log(solution2(["i", "water", "drink"], ["want", "to"], ["i", "want", "to", "drink", "water"]));  // No