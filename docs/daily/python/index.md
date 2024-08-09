---
author: "Kano Zhao"
date: 2022-12-10
---
# 安装Chrome浏览器WebDriver驱动方法步骤

<PageInfo/>

第一步：根据Mac安装浏览器版本到这个地址下载对应驱动

<CustomLink title="Chrome浏览器各版本驱动" href="https://registry.npmmirror.com/binary.html?path=chromedriver/" />

> 找不到对应版本驱动的，到此网站

<CustomLink title="Chrome浏览器最新版本驱动" href="https://googlechromelabs.github.io/chrome-for-testing/" />

第二步：webDriver驱动下载到本地解压缩，复制驱动后按command+shift+g输入”/usr/local/bin“，将复制的驱动粘贴到bin文件目录中

> 我这边是把下载的整个资源复制到了我的python目录下，chromedriver这个执行文件扔到了bin文件中

第三步：在bin目录下右击进入Terminal终端给driver 授权，不授权会报错，在Terminal终端中输入授权命令：”xattr -d com.apple.quarantine chromedriver“回车完成安装。

```bash
xattr -d com.apple.quarantine chromedriver
```

## Contributors

<Contributors/>

<CopyRight/>
