/* 
 todo: before promises we do this
*/

/* function fakeDownload(done) {
  setTimeout(function () {
    let DownloadedData = `Some Data we ripped of the interwebs`;
    done(DownloadedData);
  }, 1000);
}

fakeDownload((data) => {
  console.log(`We downloaded a file which had this data -->`);
  console.log(data);
}); */

//
/* 
todo: Using Promises
 */

function fakeDownloadPromise(correct) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      let DownloadedData = `Some Data we ripped of the interwebs`;
      console.log(`Download has completed`); // * printed before

      if (correct) {
        resolve(DownloadedData);
      } else {
        reject(new Error("Could not DOWNLOAD file"));
      }
    }, 1000);
  });
}

// * then and catch are callback functions the are always used with Promises
/* 
 todo: method 1
fakeDownloadPromise(false)
  .then((data) => {
    console.log(`We downloaded a file which had this data -->`);
    console.log(data);
  })
  .catch((err) => {
    // * catch is just used to finds error
    console.log(err);
  });
 */

// todo: method 2 ==> if we want output after some time

let downloaded = fakeDownloadPromise(true);

downloaded.catch(function (err) {
  console.log(err); // * output is due to "console.log(`Download has completed`);"
});

setTimeout(() => {
  downloaded.then((data) => {
    console.log(`We downloaded a file which had this data -->`);
    console.log(data);
  });
}, 3000); // * prints the result after 3 secs
