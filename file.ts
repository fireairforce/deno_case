// 同步读取文件
const bytes = Deno.readFileSync('./README.md')
// 如果内容是字符串，需要解码处理
const text = new TextDecoder().decode(bytes)
console.log(text)

// async 读取
async function main() {
  const bytes = await Deno.readFile('./README.md')
  const text = new TextDecoder().decode(bytes)
  console.log(text)
}

main()

const data = new TextEncoder().encode('a writing result')
Deno.writeFileSync('./files/writeFile.txt', data)