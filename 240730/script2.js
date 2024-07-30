//적정체중 =(본인 키 -100) *0.9 => 오차범위 +-5

const name = prompt("이름을 말씀해주세요!", "ex.홍길동");
const height = parseFloat(prompt("키가 어떻게 되시나요?", "ex.182.4"));
const weight = parseFloat(prompt("몸무게를 말씀해주세요!", "ex.54.7"));

const noramlWeight = (height - 100) * 0.9;

let result = weight >= noramlWeight - 5 && weight <= noramlWeight + 5;

result = result ? "적정체중입니다!" : "적정체중이 아닙니다!";

alert(`${name}님은 ${result}`);
