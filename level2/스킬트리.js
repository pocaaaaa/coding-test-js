/*
    [문제]
    선행 스킬이란 어떤 스킬을 배우기 전에 먼저 배워야 하는 스킬을 뜻합니다.
    예를 들어 선행 스킬 순서가 스파크 → 라이트닝 볼트 → 썬더일때, 썬더를 배우려면 먼저 라이트닝 볼트를 배워야 하고, 
    라이트닝 볼트를 배우려면 먼저 스파크를 배워야 합니다.

    위 순서에 없는 다른 스킬(힐링 등)은 순서에 상관없이 배울 수 있습니다. 
    따라서 스파크 → 힐링 → 라이트닝 볼트 → 썬더와 같은 스킬트리는 가능하지만, 
    썬더 → 스파크나 라이트닝 볼트 → 스파크 → 힐링 → 썬더와 같은 스킬트리는 불가능합니다.

    선행 스킬 순서 skill과 유저들이 만든 스킬트리1를 담은 배열 skill_trees가 매개변수로 주어질 때, 
    가능한 스킬트리 개수를 return 하는 solution 함수를 작성해주세요.

    [제한 조건]
     1. 스킬은 알파벳 대문자로 표기하며, 모든 문자열은 알파벳 대문자로만 이루어져 있습니다.
     2. 스킬 순서와 스킬트리는 문자열로 표기합니다.
       - 예를 들어, C → B → D 라면 "CBD"로 표기합니다
     3. 선행 스킬 순서 skill의 길이는 1 이상 26 이하이며, 스킬은 중복해 주어지지 않습니다.
     4. skill_trees는 길이 1 이상 20 이하인 배열입니다.
     5. skill_trees의 원소는 스킬을 나타내는 문자열입니다.
       - skill_trees의 원소는 길이가 2 이상 26 이하인 문자열이며, 스킬이 중복해 주어지지 않습니다.
*/

const solution = (skill, skill_trees) => {
    return skill_trees.filter(item => {
        let isResult = true;
        const regExp = new RegExp(`${skill.split("").join("|")}`, 'gi');
        const matchItem = item.match(regExp);
        
        if(matchItem && matchItem.length > 0) {
            matchItem.forEach((item, index) => {
                if(item !== skill[index]) {
                    isResult = false;
                    return isResult;
                } 
            });
        }
    
        return isResult;
    }).length;
};

const solution2 = (skill, skill_trees) => {
    const checkSkill = (item) => {
        const skillArray = skill.split("");

        for(let i=0; i<item.length; i++) {
            if(skillArray.length === 0) break;
            if(!skill.includes(item[i])) continue;
            if(item[i] === skillArray.shift()) continue;
            return false;
        }

        return true;
    };

    return skill_trees.filter(checkSkill).length;
};

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));    // 2
console.log(solution2("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));   // 2