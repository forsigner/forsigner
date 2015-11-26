#! /usr/bin/env node
'use strict';

var program = require('commander');
var Promise = require('bluebird');
var figlet = require('figlet');
var dotfiles = require('./lib/dotfiles');
var ip = require('./lib/ip');
var pkg = require('./package.json');
var updateNotifier = require('update-notifier');

updateNotifier({pkg: pkg}).notify();

program
  .version('v' + pkg.version)
    .option('-v, --version', 'display version');

program
  .command('get [filename]')
  .description('Get dotfiles')
  .action(dotfiles);

program
  .command('ip')
  .description('Show your ip')
  .action(ip);

program
  .command('hello')
  .description('Show your ip')
  .action(function() {
    figlet('Hello from forsigner', function(err, data) {
      if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
      }
      console.log(data);
    });
  });

program.parse(process.argv);
