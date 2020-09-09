url-loader的使用： 
    1.安装url-loader : npm install url-loader -D
    2.在webpack.config.js中进行配置 
    3.‘url-loader?limit=54054'：一般处理图片直接把图片变为base64编码，图片大小大于limit的值的作为文件进行处理，此时需要用到file-loader
    4.安装file-loader:npm install file-loader -D
    5.file-loader会随机一个文件名,使用&name=[name].[ext]可以用原来的文件名，但是会出现重名问题
    6.出现重名问题后，第二个图片会覆盖第一个，使用&name=[hash:8][name].[ext]来解决