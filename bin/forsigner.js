#! /usr/bin/env node
'use strict';

var fs = require('fs-extra');
var request = require('request');
var userhome = require('userhome');
var program = require('commander');
var Promise = require('bluebird');

Promise.promisifyAll(fs);

var packagesPath = userhome('.atom', 'packages');

program
  .version('v1.0.0')
  .option('-v, --version', 'display version');

program
  .command('get [filename]')
  .description('sync atom config easy.')
  .action(function(filename, options) {
    if (options.parent.rawArgs.length !== 4) {
      throw new Error('To many arguments, you should pass one argument');
    }

    var output = userhome('repos', 'forsigner', filename);
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
      .on('finish', function () {
        console.log('\ndownload ' + filename + ' success');
      })

  });

program.parse(process.argv);
