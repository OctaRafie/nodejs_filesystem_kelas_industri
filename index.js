//create server ini mengambil fungsi dari modul http
const { createServer } = require("node:http");

//kita membuat hostname untuk server
const hostname = "127.0.0.1";

//lalu, mendeklarasikan sebuah port untuk aplikasi kita
const port = 5000;

//menjalankan createServer dan memberikan konfig untuk server
const server = createServer((req, res) => {
  // status kode respons
  res.statusCode = 200;

  //untuk pembukaan tipe data ke website
  res.setHeader("content-Type", "text/plain");

  //untuk hasil akhir config server yaitu mencetak hasil
  res.end("Hello world");
});

//menjalankan server dengan .listen
server.listen(port, hostname, () => {
  console.log(`Server Running at di http://${hostname}:${port}`);
});
