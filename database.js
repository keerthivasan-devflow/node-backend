const { MongoClient } = require("mongodb");

// Mandatory: Always remember to replace all the asterisks with your actual password and execute 
// the code to work in the connection string below
const CONNECTION_STRING_URI =
  "mongodb+srv://keerthivasan:********@nodestore.hjjeh.mongodb.net/";

const client = new MongoClient(CONNECTION_STRING_URI);

const dbname = "college";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbname);
  const collection = db.collection("students");

  // the following code examples can be pasted here...
  const singleRecordToInsert = {
    studentid: "S174642",
    firstname: "Gurram",
    lastname: "Harika",
    fullname: "Gurram Harika",
    dateofbirth: "1997-08-12",
    gender: "female",
    email: "gurram.harika@gmail.com",
    phonenumber: "+91-9093877123",
    address: {
      street: "Lakshmi Nagar",
      city: "Brookfield",
      state: "KN",
      zipcode: "560036",
    },
    status: "active",
    graduationyear: 2018,
  };

  // Commented the insert document code otherwise everytime when you run your code, it will insert the document
  // const InsertResult = await collection.insertOne(singleRecordToInsert);
  // console.log("Record inserted successfully", InsertResult);

  const student = await collection
    .find({ graduationyear: 2018 })
    .toArray();
  console.log(student);

  const countDocuments = await collection.countDocuments();
  console.log("Count of Documents: ", countDocuments);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
