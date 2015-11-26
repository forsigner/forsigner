'use strict';

var fs = require('fs-extra');
var path = require('path');
var request = require('request');
var userhome = require('userhome');

module.exports = function getDotfiles(filename, options) {
  if (options.parent.rawArgs.length !== 4) {
    throw new Error('To many arguments, you should pass one argument');
  }

  var output = path.join(process.cwd(), filename);
  var url = 'https://raw.githubusercontent.com/forsigner/dotfiles/master/' + filename;

  console.log('download ' + filename + ' start');

  request
    .get(url)
    .on('data', function() {
      process.stdout.write('.');
    })
    .on('error', function() {
      console.log('something wrong');
    })
    .pipe(fs.createWriteStream(output))
    .on('finish', function() {
      console.log('\ndownload ' + filename + ' success');
    });

};
