function makerequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Request to ${location}`);

    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}

// makerequest("Google")
//   .then((message) => {
//     console.log(`Response Received`);
//     return processRequest(message);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// using async for above .then() and .catch()

console.log(`using async for above .then() and .catch()`);

async function doWork(params) {
  try {
    const response = await makerequest("Google");
    console.log("Response Received");
    const processResponse = await processRequest(response);
    console.log(processResponse);
  } catch (err) {
    console.log(err);
  }
}

doWork();
