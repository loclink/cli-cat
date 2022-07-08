const { program } = require('commander');
const helpOptions = () => {
  program.name('cc').usage('<command> [options]');
  
};

module.exports = {
  helpOptions
};
