#! /usr/bin/env node
'use strict';

var program = require('commander');
var Promise = require('bluebird');
var dotfiles = require('./lib/dotfiles');

program
  .version('v1.0.0')
  .option('-v, --version', 'display version');

program
  .command('get [filename]')
  .description('sync atom config easy.')
  .action(dotfiles);

program.parse(process.argv);
