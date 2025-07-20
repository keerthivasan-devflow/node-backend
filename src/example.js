// Write few javascript code below and try to execute in REPL mode
console.log("Example file is getting called!");

var username = "kvasan1604";

x = 10; // To make sure that whether the Common JS Module is working on non-strict mode or not.

const CalculateArea = () => {
  let radius = 50;
  let PI = Math.PI;
  let result = 2 * radius * PI * PI;
  console.log("Area of circle : " + result);
};

const FetchAPI = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  const usernameLists = users.map((user) => user.username);
  console.log("List of usernames: ", usernameLists);
};

let colors = ["Red", "Green", "Blue"];

console.log(module.exports)

module.exports.RGBColors = colors;
module.exports = { username, CalculateArea, FetchAPI };
