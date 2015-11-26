#! /usr/bin/env node
'use strict';

var program = require('commander');
var Promise = require('bluebird');
var dotfiles = require('./lib/dotfiles');
var ip = require('./lib/ip');
var pkg = require('./package.json');

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

program.parse(process.argv);
