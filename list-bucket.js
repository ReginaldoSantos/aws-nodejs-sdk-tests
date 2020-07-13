const AWS = require('aws-sdk');
const s3  = new AWS.S3();
    
s3.listBuckets(function(error, data) {
  if (error) {
    returnS3(error);
    console.log(error);
  } else {
    returnS3(data);
    console.log(data);
  }      
});

var returnS3 = function(result){
  result = JSON.stringify(result);
  console.log(result);
}
