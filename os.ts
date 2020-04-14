// deno --allow-env os.ts

// 环境变量信息
const _env = Deno.env()
console.log(_env)

// 判断是否在控制台
const _tty = Deno.isatty(0)
console.log(_tty)
//  stdin: 是否为标准输入
//  stdout: 是否为标准输出
//  stderr: 是否为标准错误

const _pid = Deno.pid;
console.log(_pid);
// export { number }  进程id