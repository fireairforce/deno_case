// 获取所有 可枚举 的 prop / function 名称
// const apiList = Object.keys(window)

const apiList = Object.getOwnPropertyNames(window)

console.log(`Supported global API [count: ${apiList.length}]: \r\n`);
console.log(`${apiList.join(',\r\n')}`);
