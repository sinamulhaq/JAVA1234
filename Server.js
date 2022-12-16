const http = require("http");
const dt = require("./MyDateTimeModule");
const dn = require("./MyTime");
const hostName = "127.0.0.1";
const port = 3000;
console.log("Preparing Server.....");
const server = http.createServer((req, res) => {
  console.log("REceive REquest");
  res.statusCode = 200;
  res.setHeader("Content-Type", "Text/html");
  res.end(
    "Hello.., <b>SamjhaRa H KYA<b> <br> Current Time is:" +
      dt.myDateTime() +
      dn.myTime()
  );
});
server.listen(port, hostName, () => {
  console.log("Server is running at" + hostName + "Port" + port);
});
