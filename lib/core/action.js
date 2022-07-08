const path = require('path');
const fsExtra = require('fs-extra');

const copyAction = async (origin, target) => {
  const originPath = path.resolve(process.cwd(), origin);
  const targetPath = path.resolve(process.cwd(), target);
  await fsExtra.copySync(originPath, targetPath);
};
module.exports = {
  copyAction
};
