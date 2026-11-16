// Tiny local server so Chrome treats the page as http://localhost
// and remembers the microphone permission (file:// pages get re-prompted).
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8765;
const FILE = path.join(__dirname, "index.html");

http.createServer((req, res) => {
  if (req.url === "/" || req.url.startsWith("/?") || req.url === "/index.html") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" });
    fs.createReadStream(FILE).pipe(res);
  } else {
    res.writeHead(404); res.end("Not found");
  }
}).listen(PORT, "127.0.0.1", () => {
  console.log(`Lecture Translator running at http://localhost:${PORT}`);
  console.log("Keep this window open during class. Close it when you're done.");
});
