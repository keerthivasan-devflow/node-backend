const buffer1 = Buffer.alloc(10);
console.log(buffer1); // Output: <Buffer 00 00 00 00 00 00 00 00 00 00>

// Example 2: Create a buffer of 10 bytes, all initialized to 1
const buffer2 = Buffer.alloc(10, 1);
console.log(buffer2); // Output: <Buffer 01 01 01 01 01 01 01 01 01 01>

// Example 3: Create a buffer of 10 bytes, initialized with a string "hello"
const buffer3 = Buffer.alloc(10, "hello");
console.log(buffer3[0]); // Output: <Buffer 68 65 6c 6c 6f 68 65 6c 6c 00>
console.log(buffer3[1]); 
console.log(buffer3[2]); 
console.log(buffer3[3]); 
console.log(buffer3[4]); 
console.log(buffer3[5]); 
console.log(buffer3[6]); 
console.log(buffer3[7]); 
console.log(buffer3[8]); 
console.log(buffer3[9]); 
console.log("********************************************")
// Example 3: Create a buffer of 10 bytes, initialized with a string "hello"
const buffer4 = Buffer.alloc(10, "hello", "utf-8");
console.log(buffer4[0]); // Output: <Buffer 68 65 6c 6c 6f 68 65 6c 6c 00>
console.log(buffer4[1]); 
console.log(buffer4[2]); 
console.log(buffer4[3]); 
console.log(buffer4[4]); 
console.log(buffer4[5]); 
console.log(buffer4[6]); 
console.log(buffer4[7]); 
console.log(buffer4[8]); 
console.log(buffer4[9]); 