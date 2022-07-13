const path = require('path');
const fsExtra = require('fs-extra');

// 复制
const copyAction = async (origin, target) => {
  const originPath = path.resolve(process.cwd(), origin);
  const targetPath = path.resolve(process.cwd(), target);
  await fsExtra.copySync(originPath, targetPath);
};


// 删除
const removeAction = async (dir) => {
  await fsExtra.removeSync(dir)
}
module.exports = {
  copyAction,
  removeAction
};
