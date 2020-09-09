插件的使用：
    html-webpack-plugin的使用
        1.安装插件 npm install html-webpack-plugin -D
        2.在webpack.config.js进行配置 
        3.根据模板创建出来的html文件一样是放在内存里
        4.当用模板创建出来的html和原先的html重名的时候(都叫index.html),页面显示的是用模板创建的html
        5.通过模板创建出来的html会自动把打包过后的bundle.js引入，页面中无需重复引入
        6.bundle.js和模板创建的html都在根路径下，在内存里




loader让webapck能够处理那些非javascript文件
loader被用于转换某些类型的模块，而插件则可以用于执行范围更广的任务
