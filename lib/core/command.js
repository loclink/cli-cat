const { program } = require('commander');
const { copyAction, removeAction } = require('./action');

// 注册指令
const registerCommands = () => {
  // copy
  program
    .command('copy')
    .argument('<origin>', '原文件或文件夹')
    .argument('<target>', '复制目的地')
    .description('复制指令')
    .action(copyAction);

  program.command('rm').argument('<dir>', '文件或文件夹').description('删除指令').action(removeAction);
};

module.exports = {
  registerCommands
};
