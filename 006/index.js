// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다. 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

/*
1)  NaN
2)  1
3)  ""
4)  0
5)  undefined
*/

// 답: 2번

//falsy: 0, '', NaN, false, null, undefined
console.log(!0);
console.log(isNaN(1));
console.log(!null);
console.log(!undefined);
