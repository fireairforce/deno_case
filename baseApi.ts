const { readFileSync } = Deno

// readFileSync
const decoder = new TextDecoder('utf-8')
const res = readFileSync('./README.md')
console.log(decoder.decode(res))