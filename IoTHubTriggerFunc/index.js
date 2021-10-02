module.exports = function (context, IoTHubMessages) {
    //context.log(context);
    context.log('Function triggered to process a message: ', IoTHubMessages);
    console.log(IoTHubMessages.temperature);

    let iotTemperature = IoTHubMessages.temperature;
    console.log("revTemperature : ", iotTemperature);

    let strMsg = "Test strMsg" + iotTemperature;
    console.log("TestMsg : ", strMsg);

    let jsonStr = JSON.stringify(IoTHubMessages);
    console.log("jsonStr : ", jsonStr);

    let jsonObj = JSON.stringify(jsonStr);
    console.log("jsonObj : ", jsonObj);

    context.done();
};

/*
Function triggered to process a message:  {
  messageId: 10,
  deviceId: 'Raspberry Pi Web Client',
  temperature: 29.021268498365437,
  humidity: 76.81801544890304
}[2021-09-29T12:17:36.921Z] revTemperature :  29.021268498365437
[2021-09-29T12:17:36.929Z] TestMsg :  Test strMsg29.021268498365437
*/