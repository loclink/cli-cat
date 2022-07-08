const { program } = require('commander');
const { copyAction } = require('./action');

// 注册指令
const registerCommands = () => {
  // copy
  program
    .command('copy')
    .argument('<origin>', '原文件或文件夹')
    .argument('<target>', '复制目的地')
    .description('复制指令')
    .action(copyAction);
};

// const registerListenCommand = () => {
//   program.on('command:list', () => {
//   })
// };

module.exports = {
  registerCommands
};
