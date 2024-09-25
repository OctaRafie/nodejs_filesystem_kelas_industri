const fs = require("node:fs");
fs.writeFile(
  "Biodata.txt",
  "Hello nama saya Octa, saya kelas XI TJKT 2 , Alamat saya di Blok M12 No 11, Umur saya 16 tahun",
  function (error) {
    if (error) {
      console.error("terjadi eror", error);
    } else {
      console.log("File berhasil dibuat");
    }
  }
);
