# CliCat

> 一个脚手架辅助工具，为了适配多个操作系统，在多个操作系统中使用相同指令完成相同的操作。

## 安装:

```shell
npm install cli-cat -g
```

## 快速使用:

``` shell
> cc --help
Usage: cc <command> [options]

Options:
  -v,--version            output the version number
  -h, --help              display help for command

Commands:
  copy <origin> <target>  复制指令
  help [command]          display help for command
```



1. 复制操作:

```shell
cc copy <origin> <target>
```

两个必传参数，`<origin>` 为需要复制的资源，`<target>`为目标地址。

注意：

1. 如果`<origin>`是一个目录，则将复制该目录中的所有内容，而不是目录本身
2. 如果`<origin>`是一个文件，则`<target>`不能是目录

## 示例:

1. 复制目录：

```shell
cc copy ./testDir1 ./testDir2
```

2. 复制文件:

```shell
cc copy ./demo.js ./demo02.js
```

3. 删除文件夹:

``` shell
cc rm ./dist
```

4. 删除文件:

``` shell
cc rm ./demo.js
```



## 应用场景:

1. 项目中打包编译时需要 copy 一些额外的文件：

![cli-cat](https://tva1.sinaimg.cn/large/0087ufIQgy1h3zmkaaw2kg30w00ingsq.gif)
