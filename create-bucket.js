const AWS = require('aws-sdk');
const s3  = new AWS.S3();

var params = {
  Bucket: 'webnize-node-sdk-sample'
};

s3.createBucket(params, function(err, data) {
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
