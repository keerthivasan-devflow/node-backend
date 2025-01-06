let TextBuffer = Buffer("Apple is a fruit")         // creating a simple buffer w/ simple text data
console.log("TextBuffer: ", TextBuffer);            // displaying the buffer value
console.log("TextBuffer[0]: ", TextBuffer[0]);      // first index value
console.log("String Length: ", TextBuffer.length)   // length: 16 - For each character it wil print buffer value including spaces.
console.log("Type of Buffer: ", typeof TextBuffer)  // type of buffer: Object

let FixedBuffer = Buffer.alloc(3)
console.log(FixedBuffer);

let InitialFixedBufferInput = Buffer.alloc(5, "hello")
console.log("InitialFixedBufferInput: ", InitialFixedBufferInput);
console.log(InitialFixedBufferInput[0])
console.log(InitialFixedBufferInput[1])
console.log(InitialFixedBufferInput[2])
console.log(InitialFixedBufferInput[3])
console.log(InitialFixedBufferInput[4])