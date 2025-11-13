const path = require("path");
const finalPath = path.join("folder", "subfolder", "file.txt");
console.log(finalPath);
const absolute = path.resolve("folder", "file.txt");
console.log(absolute);
const fileName = path.basename("/users/admin/data/info.txt");
console.log(fileName);
const dir = path.dirname("/users/admin/data/info.txt");
console.log(dir);
const ext = path.extname("hello.js");
console.log(ext);

const info = path.parse("/users/admin/data/info.txt");
console.log(info);
const formatted = path.format({
  dir: '/users/admin/data',
  name: 'info',
  ext: '.txt'
});

console.log(formatted);
