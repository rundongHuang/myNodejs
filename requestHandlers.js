var querystring = require("querystring");

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<b>用户: </b>'+
    '<textarea name="text" rows="1" cols="30"></textarea>'+
    '<br>'+'<br>'+
    '<b>密码: </b>'+
    '<textarea name="text" rows="1" cols="30"></textarea>'+
    '<br>'+
    '<input type="submit" value="登陆" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) 
{
  var requestText = querystring.parse(postData).text;

  // console.log(typeof requestText);
  // console.log(requestText);
  // var srtList = requestText.split(",");
  var uName = requestText[0];
  var passw = requestText[1];

  console.log("8888"+uName+"  --- "+ passw);


  console.log("Request handler 'upload' was called.");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("You've sent the text: "+
  querystring.parse(postData).text);
  response.end();
}

function showResults(response, postData)
{
    console.log("doto showResults...")

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("in doto showResults" +
    querystring.parse(postData).text);
    response.end();
}

function rune(response, postData) 
{
  // response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("show rune text");
  response.end();
}

function test1(response, postData) 
{
  response.write("show test1 text ---rune");
  response.end();
}


exports.start = start;
exports.upload = upload;
exports.rune = rune;
exports.test1 = test1;
exports.showResults = showResults;