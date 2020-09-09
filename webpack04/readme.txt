webpack-dev-server的使用：
    １.实现热部署，不需要用指令重新打包
    ２.安装：npm install webpack-dev-server -D 
    3.在package.json里面添加start，开启服务:npm run start
    4.webpack-dev-server打包后的bundle.js存放在内存中（不在磁盘上），所以index.html引用的时候直接引用根目录下的就行
    5.webpack-dev-server会在你修改文件后自动打包，并且自动刷新页面
    
