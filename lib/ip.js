'use strict';

var fs = require('fs-extra');
var path = require('path');
var request = require('request');
var userhome = require('userhome');
var os = require('os');

module.exports = function getIp(options) {
  // console.log(os.networkInterfaces());
  var networkInterfaces = require('os').networkInterfaces();
  var ip = [];

  Object
    .keys(networkInterfaces)
    .forEach(function(i) {
      networkInterfaces[i].forEach(function(j) {
        if (j.internal === false && j.family === 'IPv4') {
          ip.push(j.address);
        }
      });
    });

  console.log(ip.toString());
};
