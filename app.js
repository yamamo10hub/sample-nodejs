//デバッグの厳格モード
'use strict';

// process.argvはプリセットされているコマンドライン引数だが、
// 0はnodeコマンドのfilepath, 1は実行プログラムのfilepathが入っており
// 2にコマンドライン引数が入っている
// ||をつけると左辺がfalse的な値の時に0を代入するようにできる(null, undefined,0等)
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum = sum + i;
}
console.log(sum);

