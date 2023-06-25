const fs = require("fs");

const timedateinfo = new Date();

// 24h TIME FORMAT
const time = timedateinfo.toLocaleTimeString("en-US", {
  hour12: false,
});
const trimmedTime = time.split(":").join("_");

const date = timedateinfo.toLocaleDateString();
const trimmedDate = date.split("/").join("");

const fileName = trimmedDate + "-" + trimmedTime;

// Q1

fs.writeFile(`./NodeJSFileSystem/files/${fileName}.txt`, time, (err) => {
  if (err) {
    console.log(err);
  } 
  else {
    console.log("File has been created.");
  }
});

// Q2

fs.readdir("./NodeJSFileSystem/files", (err, files) => {
  if (err) {
    console.log(err);
  } 
  else {
    files.forEach((file) => {
      console.log(file);
    });
  }
});
