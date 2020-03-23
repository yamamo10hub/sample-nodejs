'use strict';
// フィボナッチ数列を40番目まで出力する
// 指定数の-1した値と、-2した値を足したもの
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
