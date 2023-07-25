# /bin/bash

# 确保脚本抛出遇到的错误
set -e

# 打包生成静态文件
pnpm build

# 进入待发布的 dist/ 目录
cd docs/.vitepress/dist

# 设置CNAME文件的路径和内容
cname_file="CNAME"
cname_content="docs.virkano.com"

# 检查文件是否已经存在，如果存在则删除
if [ -e "$cname_file" ]; then
  rm "$cname_file"
fi

# 将内容写入CNAME文件
echo "$cname_content" > "$cname_file"

git init
git add .
git commit -m 'deploy'

# 部署到 https://.github.io/
git push -f git@github.com:Virkano/docs.git main:github-pages

# 提交所有代码到github
cd ../../../
git add .
git commit -m 'update'
git push
