const awesome = () => {
  console.log(`Omg !! this is Awesome`);
};

const year = () => {
  console.log(`2020 is Worst Year 😭😭😭`);
};

let greet = (name) => {
  console.log(`Hi,`, name);
};

// todo: module.exports => it is used to send data from 1 file to another
module.exports = {
  awesome,
  year,
  greet,
};
