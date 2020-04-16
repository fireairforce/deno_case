const add = (a: number,b: number): number => {
  return a + b
}

console.log(add(1,2));

// 跑这个脚本 deno run test.ts

Deno.chmodSync("/files/writeFile.txt", 0o666);