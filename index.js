
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

//var express = require('express');  

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/rune"] = requestHandlers.rune;
handle["/rune/test"] = requestHandlers.test1;

server.start(router.route, handle);

