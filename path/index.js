const path = require("path");

console.log(__dirname)
console.log(path.resolve("admin/users", "contents.html"))
console.log(path.resolve("../admin/users", "contents.html"))
console.log(path.resolve("../../admin/users", "contents.html"))