/**
 * const,let等の変数宣言
 */
var val1 = "val変数";
console.log(val1);

// var変数は上書き可能
val1 = "val変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "val変数を再宣言";
console.log(val1);

let val2 = "let変数";
console.log(val2);

// let変数は上書き可能
val2 = "let変数を上書き";
console.log(val2);

// let変数は再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

const val3 = "const変数";
console.log(val3);

// const変数は上書き不可能
// val3 = "const変数を上書き";
// console.log(val3);

// const変数は再宣言不可能
// const val3 = "const変数を再宣言";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更可能
const val4 = {
  name: "aki",
  age: 30
};
val4.name = "Ryo";
val4.addless = "@gamail";
console.log(val4);

// constで定義した配列は変更可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name = "aki";
const age = 30;
//「私の名前はakiです。年齢は30歳です」

// 従来の方法
const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */
//従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です"));
const func2 = function (str) {
  return str;
};
console.log(func2("func2です"));

//アリー関数
const func3 = (str) => {
  return str;
};
console.log(func3("func3です"));

//returnが処理が1行の場合、省略して記載できる。
const func4 = (str) => str;
console.log(func4("func4です"));

const func5 = (num1, num2) => {
  return num1 + num2;
};
console.log(func5(6, 7));

/**
 * 分割代入
 */

//オブジェクトで分割代入
const myProfile = {
  myname: "aki",
  myage: 30
};
const message3 = `名前は${myProfile.myname}です。年齢は${myProfile.myage}です。`;
console.log(message3);

const { myname, myage } = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);

//配列で分割代入
const myProfile2 = ["aki", 30];
const message5 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
console.log(message5);

const [myname2, myage2] = myProfile2;
const message6 = `名前は${myname2}です。年齢は${myage2}です。`;
console.log(message6);

/**
 * デフォルト値、引数等
 */
const sayHello = (name) => console.log(`こんにちは！${name}さん`);
sayHello("aki");
//引数がないとundefinedで出力される。
sayHello();

const sayHello2 = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
sayHello2("aki");
//デフォルト値を引数に設定しているので"ゲストが出力される"
sayHello2();

/**
 * スプレッド構文　...
 */
//配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

//コピー
const arr6 = [...arr4];
console.log(arr6);
const arr7 = [...arr4, ...arr5];
console.log(arr7);

//　普通に代入したら？
// =で代入された値は参照渡しとなっているので、
// arr8を変更するとarr4にも変更が適用されてしまう。
const arr8 = arr4;
arr8[0] = 100;
console.log(arr8);
console.log(arr4);
