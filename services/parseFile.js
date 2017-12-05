let fs = require('fs');
let path = require('path');

exports.getSolution = () => {

  let filePath = path.join(__dirname, '..', 'static', 'lng.csv');
  // return new Promise((resolve,reject) => {
  //   fs.readFile(filePath, 'utf8', function(err, contents) {
  //     if (err) {
  //       console.log(err);
  //       reject(err);
  //     }
  //     console.log(contents);
  //     resolve(contents)
  //   });
  // });
  const processData = (chunk) => {

  };
  const done = () => {

  };
  let stream = fs.createReadStream(filePath, { encoding : 'utf8' });
  stream.on("readable", () => processData(stream.read()));
  stream.on("end", done);
  return new Promise((resolve, reject) => {

  });

};