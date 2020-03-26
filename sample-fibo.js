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
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
function fibmap(n) {
    if(memo.has(n)) {
        return memo.get(n);
    }
    const value = fibmap(n - 1) + fibmap(n - 2);
    memo.set(n, value);
    return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
    //console.log(fib(i));
    console.log(fibmap(i));
}
