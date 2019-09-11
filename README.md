# jormungand
learn

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## ((工作区)) -- git add --> ((暂存区)) -- git commit -m '' --> ((当前分支)) 

### 创建 Git仓库 ((.git 版本库))
git init

### 添加文件到 Git仓库 
git add *

### 删除 Git仓库的文件
git rm *

### 提交文件到 Git仓库
git commit -m '修改说明'

### 关联远程仓库
git remote add origin https://github.com/buleak/Project.git

### 克隆远程仓库
git clone https://github.com/buleak/Project.git

### 推送到远程仓库
git push -u origin master   ---> 首次推送加上 -u

### 查看状态
git status

### 查看提交日志
git log 
git log --pretty=oneline

### 查看命令日志
git reflog 

### 丢弃工作区修改   (还原) 
git checkout -- fileName  (用版本库里的版本替换工作区的版本)
提交到暂存区又修改 ---> 和暂存区一样
还没有提交到暂存区 ---> 和版本库一样 

### 版本回退
git reset HEAD                      ---> 暂存区回退到工作区 
git reset --hard HEAD^              ---> 版本库回退到上一版本
git reset --hard HEAD^^             ---> 版本库回退到上二版本
git reset --hard HEAD~100           ---> 版本库回退到上 100版本
git reset --hard 1094a (commit id)  ---> 版本库回退到指定版本

### 创建分支
git switch -c devName       ---> 创建并切换分支
git switch devName          ---> 切换分支
git branch                  ---> 查看分支
git branch devName          ---> 创建分支
git branch -d devName       ---> 删除分支
git branch -D devName       ---> 强行删除分支
git merge devName           ---> 合并分支  
git merge --no-ff devName   ---> 合并分支, 禁止使用 Fast forward模式 

