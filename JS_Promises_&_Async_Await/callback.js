const userLeft = false;
const userWatchingCatMeme = false;

function watchCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "Dog < Cat",
    });
  } else {
    callback("Thumbs up...");
  }
}

watchCallback(
  (message) => {
    console.log("Success : " + message);
  },
  (err) => {
    console.log(err.name + " " + err.message);
  }
);
