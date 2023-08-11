---
author: "Kano Zhao"
date: 2022-12-10
---

<script setup>
import Table from './table.vue';
</script>

# Brew

<PageInfo/>

```brew``` 是 MAC 与 LINUX 上的软件包管理器，类似于 Linux 中的 yum 与 apt 软件管理器 。

虽然 brew 可以运行在 Linux 中，但主要还是在 Mac 系统中使用，因为 Linux 有更适合的包管理器。

<CustomLink title="官网地址" href="https://brew.sh/index_zh-cn.html"/>

![Brew](./img/brew1.jpg)

## 安装软件

下面介绍两种方式安装 brew

### 独立安装【推荐】🌟

下面使用 ```中国科学技术大学``` 源安装brew。

<CustomLink title="中国科学技术大学" href="https://mirrors.ustc.edu.cn/help/brew.git.html"/>

#### 开始安装

首先在命令行运行如下几条命令设置环境变量:

```bash
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.ustc.edu.cn/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.ustc.edu.cn/homebrew-core.git"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.ustc.edu.cn/homebrew-bottles"
export HOMEBREW_API_DOMAIN="https://mirrors.ustc.edu.cn/homebrew-bottles/api"
```

执行以下命令开始安装brew: 

```bash
/bin/bash -c "$(curl -fsSL https://mirrors.ustc.edu.cn/misc/brew-install.sh)"
```

#### 安装后的操作

安装后执行以下命令设置镜像，需要先安装zsh

```bash
echo 'export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.ustc.edu.cn/brew.git"' >> ~/.zshrc
echo 'export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.ustc.edu.cn/homebrew-core.git"' >> ~/.zshrc
echo 'export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.ustc.edu.cn/homebrew-bottles"' >> ~/.zshrc
echo 'export HOMEBREW_API_DOMAIN="https://mirrors.ustc.edu.cn/homebrew-bottles/api"' >> ~/.zshrc
```

然后在 ~/.zshrc 文件中定义brew命令路径，否则brew命令无效

```bash
export PATH=$HOME/bin:/usr/local/bin:$PATH:/opt/homebrew/bin
```

将 brew 更新到最新版

```bash
brew update
```

将已安装的仓库远程替换为 USTC 镜像

```bash
brew tap --custom-remote --force-auto-update homebrew/cask https://mirrors.ustc.edu.cn/homebrew-cask.git
```

#### 自动安装

使用自动安装脚本 ```HomebrewCN``` 安装简单快速，并可以在安装过程中设置镜像源，适合安装经常失败的小伙伴。

<CustomLink title="HomebrewCN" href="https://gitee.com/cunkai/HomebrewCN"/>

##### 安装命令

苹果电脑标准安装脚本：（推荐 优点全面 缺点慢一点）

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

苹果电脑极速安装脚本：（优点安装速度快 缺点 update 功能需要命令修复 ）

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)" speed
```

Linux 标准安装脚本：(作者没试过，操作有风险，路还要你自己闯 ⛽️)

```bash
rm Homebrew.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh ; bash Homebrew.sh
```

##### 卸载命令

苹果电脑卸载脚本：

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh)"
```

Linux 卸载脚本：

```bash
rm HomebrewUninstall.sh ; wget https://gitee.com/cunkai/HomebrewCN/raw/master/HomebrewUninstall.sh ; bash HomebrewUninstall.sh
```

#### 恢复镜像

如果对源不满意可以恢复到初始源

首先执行下述命令:

```bash
# 重置brew.git:
$ cd "$(brew --repo)"
$ git remote set-url origin https://github.com/Homebrew/brew.git
# 重置homebrew-core.git:
$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
$ git remote set-url origin https://github.com/Homebrew/homebrew-core.git
```

然后删掉 HOMEBREW_BOTTLE_DOMAIN 环境变量,将你终端文件

```bash
 ~/.bash_profile
```

或者

```bash
 ~/.zshrc
```
 
中

```bash
HOMEBREW_BOTTLE_DOMAIN
```

行删掉, 并执行

```bash
source ~/.bash_profile
```

或者

```bash
source ~/.zshrc
```

### 常用命令

下面介绍使用 brew 管理软件包的操作。

<Table/>

#### 搜索软件

查看 PHP 版本信息

```bash
brew info php
```

搜索 php

```bash
brew search php
```

搜索

#### 安装软件

如果用过 Linux 中的 apt 或 yum ，brew 使用方式与它们差不多，下面演示安装软件的方式。

安装 wget

```bash
brew install wget
```

安装 curl

```bash
brew install curl
```

安装 composer

```bash
brew install composer
```

重新安装软件

```bash
brew reinstall curl
```

#### 更新软件

更新 homebrew

```bash
brew update
```

更新软件

```bash
brew upgrade
```

#### 删除软件

下面是删除 curl

```bash
brew uninstall curl
```

#### 常见问题

Warning: No remote

```bash
Warning: No remote 'origin' in /opt/homebrew/Library/Taps/homebrew/homebrew-cask, skipping update!
Warning: No remote 'origin' in /opt/homebrew/Library/Taps/homebrew/homebrew-services, skipping update!
```

执行以下命令

```bash
git config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-cask
git config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-services
```
cp: /private/tmp/d20230325-13530-18mk8v

执行以下命令，如果目录不存在，请自行创建

```bash
cd "$(brew --repo)/Library/Taps/"
rm -rf homebrew
mkdir homebrew
cd homebrew
git clone git://mirrors.ustc.edu.cn/homebrew-core.git
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
```



## Contributors

<Contributors/>

<CopyRight/>