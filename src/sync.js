let colors = ["Red", "Green", "Blue"];
let person = {
  firstname: "Bolmeyer",
  lastname: "Lauren",
};

console.log(`person: ${person}`);
console.log(`colors: ${colors}`);

for (let i = 0; i < 10000; i++) {
  console.log("Main thread blocked");
}

let Calculate = (x, y) => {
  let result = x + y;
  console.log(`Result: ${result}`);
};

Calculate(10, 30);
