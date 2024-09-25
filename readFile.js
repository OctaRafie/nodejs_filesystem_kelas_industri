const fs = require(`node:fs`);
fs.readFile(`hello txt`, "utf8", function (error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log("isi filenya :", data);
  }
});
