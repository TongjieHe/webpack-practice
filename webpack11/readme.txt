babel-loader的使用：
    1.es6出来以后，有些语法导致浏览器不兼容
    2.我们可以通过babel将es6的语法翻译为原先的语法
    3.webpack无法识别class等es6的代码，我们安装babel
    4.安装：npm install babel-loader @babel/core @babel/preset-env -D
    5.在webpack.config.js中配置rules 
    6.配置完成后发现预设的babel也无法处理，所以我们需要自己去装对应的语法插件
        npm install --save-dev @babel/plugin-proposal-class-properties
    7.在rules中配置使用的插件

注意：
    1.大部分预设可以处理，部分处理不了的我们就自己去装需要的插件进行处理
    2.我们也可以把rules...options中的配置内容放到babel专用的配置文件中 .babelrc
    