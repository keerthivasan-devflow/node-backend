const crypto = require("crypto");
const process = require("process")
process.env.UV_THREADPOOL_SIZE = 6

// Here the resultant order of the crypto functions may vary depends
// on whatever thread returns the result at the eraliest which will get executed.
// Note: All the result will be returned at the same time (When do we have only 4 aynsc operations to perform)
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () =>
  console.log("1 - Key Generated")
);

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () =>
  console.log("2 - Key Generated")
);

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () =>
  console.log("3 - Key Generated")
);

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () =>
  console.log("4 - Key Generated")
);

// Note: When we have the 5th async function, this will always be executed at the last after some time because thread
// pool size is 4 by default so the 5th task should wait in a queue until any of these thread becomes available.
// First four cryto will be offloaded to thread pool and return the result at the same.
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", () =>
  console.log("5 - Key Generated")
);
