
// helloworld http服务
async function simpleServer (opts: Deno.ListenOptions): Promise<void> {
  // 创建一个tcp服务
  const listener: Deno.Listener = Deno.listen(opts) as Deno.Listener;
  console.log(`listening on ${opts.hostname}: ${opts.port}`);
  // 死循环来监听TCP请求
  while (true) {
    // 等待 tcp 链接
    const conn: Deno.Conn = await listener.accept()
    // 执行效应
    const CRLF = '\r\n';
    const bodyStr = 'hello world'
    const res = [
      `HTTP/1.1 200`,
      `content-length: ${bodyStr.length}`,
      ``,
      `${bodyStr}`,
    ].join(CRLF);
    // 将报文字符串转成二进制数据流
    const encoder = new TextEncoder();
    // 将http二进制数据流写入TCP链接
    await conn.write(encoder.encode(res));
    conn.close();
  }
}

simpleServer({
  hostname: 'localhost',
  port: 8888
})