// 기본 타입
let count = 0;
count += 1;
count = "문자열"; // 오류

const message: string = "hello world";
const done: boolean = false;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];

messages.push(1);

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: "red" | "orange" | "yellow" = "red";
color = "yellow";
color = "green"; // 오류

// 함수1
function sum(x: number, y: number): number {
  return x + y;
}

const result = sum(1, 2);

// 함수2
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}
const total = sumArray([1, 2, 3, 4, 5]);

// 함수3
function returnNothing(): void {
  console.log("값");
}
returnNothing();
