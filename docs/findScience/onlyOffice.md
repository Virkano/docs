---
author: "Kano Zhao"
date: 2024-08-08
---
# 快速起步指南

<PageInfo/>

1. 安装docker

2. 安装并启动 Onlyoffice 服务：

```bash
# 如果你了解 Onlyoffice 的 JWT 校验可执行下面这条命令来启动
sudo docker run -i -t -d -p 8701:80 \
    -v ~/app/onlyoffice/DocumentServer/logs:/var/log/onlyoffice  \
    -v ~/app/onlyoffice/DocumentServer/data:/var/www/onlyoffice/Data  \
    -v ~/app/onlyoffice/DocumentServer/lib:/var/lib/onlyoffice \
    -v ~/app/onlyoffice/DocumentServer/db:/var/lib/postgresql \
    -e JWT_SECRET=my_jwt_secret onlyoffice/documentserver
```

> 如果是第 1 次执行这个命令，会先去下载 Onlyoffice，比较慢，约等待 3~10 分钟，网络畅通一点的会快一些。如果是已经安装过则直接进行启动。 
>

不需要token的方式，目前未测试成功 （IP访问问题）

```bash
# Onlyoffice@7.2 之后的版本默认开启了 JWT 加密，这里在启动时建议先关闭 JWT 校验
#（如果这里你看不懂在说什么那就直接执行下面这句来启动）
sudo docker run -i -t -d -p 8701:80 -e JWT_ENABLED=false onlyoffice/documentserver
```

> 进入docker 启动内置服务

```bash
# 进入容器 id
docker exec -it 容器id /bin/bash

# 启动所有的内置服务
supervisorctl restart all

# 退出容器
exit
```

```bash
-> ~ docker exec -it f2a3eb675ad1 /bin/bash 
root@f2a3eb675ad1:/# supervisorctl restart all 
ds: docservice: stopped 
ds: converter: stopped 
ds: metrics: stopped 
ds: docservice: started 
ds: converter: started 
ds: metrics: started
ds: example: started
root@f2a3eb675ad1:/# exit
exit
-> ~
```



最后访问 http://IP:8701/example/ 页面（这里要注意，IP 不能是 localhost 和 127.0.0.1，一定要用真实本机内网IP 来访问）。


<CustomLink title="例子(Node 服务) 根据官网例子修改后" href="https://github.com/Virkano/onlyoffice-serverdemo" />

<CustomLink title="官网服务端多种语言例子" href="https://api.onlyoffice.com/editors/demopreview" />

<CustomLink title="集成到vue例子" href="https://api.onlyoffice.com/editors/vue" />

```vue
<script setup>
// Docker 部署的IP和端口
const ip = 'http://192.168.8.56:8701/'
const visible = ref(false)

const config = ref()

// Node 服务启动的IP和端口 && 如果和Docker部署的IP不一致，需要处理跨域问题 后端处理 或者 vite 走 server -> proxy 代理
axios.get(`http://192.168.8.56:3000/editor-config?fileName=test.docx&lang=zh&directUrl=false`)
  .then((res) => {
    config.value = res.data
    console.log(`output->config.value`, config.value)
    visible.value = true
  })
</script>

<template>
  <div style="width: 80vw; height: 70vh;">
    <DocumentEditor
      v-if="visible"
      id="docEditor"
      :document-server-url="ip"
      :config="config"
    />
  </div>
</template>
```


## Contributors

<Contributors/>

<CopyRight/>

<Person/>
