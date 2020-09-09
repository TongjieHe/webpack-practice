const path = require("path") // 导入path包


module.exports={
    //配置入口
    entry:"./src/main.js",
    //配置出口
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist')
    },
    //webpack-dev-server的相关配置
    devServer:{
        open:true,
        port:"3000",
        contentBase:"src",
        hot:true
    },
    //配置开发模式，消除打包警告
    mode:"development"
}