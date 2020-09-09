webpack中整合vue：
    1.在webpack中安装vue，npm install vue -S
    2.在main.js中使用vue，出现引入运行时版本无法进行编译问题,只能使用完整版
    3.使用别名，在webapck.config.js中配置别名

vue单组件的使用:
    1.使用运行时版本就可以
    2.安装vue后缀的loader:npm install vue-loader vue-template-compiler -D
    3.在webpack.config.js里面配置插件和rules
    4.创建mycomp.vue文件
    3.页面中引入组件，mian.js中使用render渲染组件