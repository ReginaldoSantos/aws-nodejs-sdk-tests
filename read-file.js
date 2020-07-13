const AWS = require('aws-sdk');
const s3  = new AWS.S3();

var params = {
  Bucket: 'webnize-node-sdk-sample', 
  Key: 'file.txt'
};

s3.getObject(params, function(err, data) {
  if (err) {
    returnS3(err);
    console.log(err);
  } else {
    returnS3(data);
    console.log(data);
  }
});

var returnS3 = function(result){
  var content = result.Body.toString();
  console.log(content);
};
