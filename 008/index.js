// 자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다.)

var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

// 답: 84

// 마지막 값을 가져온다.

var d = {
    1:180,
    2:78,
    weight:84,
    'temperature':36,
    'eyesight':1
};

// 불가능
console.log(d[weight]);
// 가능
console.log(d.weight);