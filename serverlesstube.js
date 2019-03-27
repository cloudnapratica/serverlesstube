const AWS = require("aws-sdk");
const s3 = new AWS.S3();

exports.list = async event => {
  var response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    }
  };

  try {
    const params = {
      Bucket: process.env.BUCKET
    };

    const videos = await s3.listObjects(params).promise();
    response.body = JSON.stringify(videos);

    return response;
  } catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(e);
    throw new Error(response);
  }
};

exports.delete = async event => {
  var response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    }
  };

  try {
    const params = {
      Bucket: process.env.BUCKET,
      Key: event.pathParameters.id.replace(/%20/g, " ")
    };

    await s3.deleteObject(params).promise();
    response.body = JSON.stringify("Video deleted successfully!");

    return response;
  } catch (e) {
    response.statusCode = 500;
    response.body = JSON.stringify(e);
    throw new Error(response);
  }
};
