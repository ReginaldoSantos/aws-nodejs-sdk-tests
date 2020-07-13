const AWS = require('aws-sdk');
const s3  = new AWS.S3();

var bucket = 'webnize-node-sdk-sample';
var filename = 'file.txt';
var content = 'Congratulations! You have create a new file into AWS S3.';

s3.putObject({
  Bucket: bucket,
  Key: filename,
  Body: content
},
function(err, data) {
  if (err) {
    returnS3(err);
    console.log(err);
  } else {
    returnS3(data);
    console.log(data);
  }
});

var returnS3 = function(result){
    result = JSON.stringify(result);
    console.log(result);
}