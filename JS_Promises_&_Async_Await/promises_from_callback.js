const userLeft = false;
const userWatchingCatMeme = false;

function watchPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "Dog < Cat",
      });
    } else {
      resolve("Thumbs up...");
    }
  });
}

watchPromise()
  .then((message) => {
    console.log("Success : " + message);
  })
  .catch((err) => {
    console.log(err.name + " " + err.message);
  });

/*
 *
 * Promise.all() for calling multiple Promises
 *
 */

const One = new Promise((resolve, reject) => {
  resolve("One");
});

const Two = new Promise((resolve, reject) => {
  resolve("Two");
});

const Three = new Promise((resolve, reject) => {
  resolve("Three");
});

Promise.all([One, Two, Three])
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
