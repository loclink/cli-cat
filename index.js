#!/usr/bin/env node
const { program } = require('commander');
const { registerCommands } = require('./lib/core/command');
const { helpOptions } = require('./lib/core/help');

const spannerStart = async () => {
  registerCommands();
  program.version(require('./package.json').version, '-v,--version');
  helpOptions()
  program.parse(process.argv);
};

spannerStart();
