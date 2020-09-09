webpack的使用示例：
    １.导入jquery：node_modules下安装jquery--npm install jquery -S，main.js里面添加　import $ from "jquery"
    ２.新建dist文件夹，存放打包过后的文件(对main.js打包，并且自己分析依赖，把依赖项(jquery.js)也打包进去)
    ３.打包 npx webpack ./src/main.js -o ./dist/bundle.js
    ４.index.html直接引用dist文件夹下的bundle.js
    ５.webpack可以对一些es6中的语法做一些翻译，解析成低版本的语法






-D 开发依赖　　-S　生产依赖
import $ from "jquery" 是es6的语法，也可使用　var $ = require( "jquery" );
