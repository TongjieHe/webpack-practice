const path = require("path") // 导入path包
var HtmlWebpackPlugin = require("html-webpack-plugin")

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
        //修改项目的根路径
        contentBase:"src",
        hot:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            //模板路径
            template:"src/index.html",
            //生成的新文件名称
            filename:"index.html"
        })
    ],
    //配置规则
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
          },
          {
            test: /\.less$/,
            use: [ 'style-loader', 'css-loader' , 'less-loader' ]
          },
          {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader' , 'sass-loader' ]
          },
          {
            test: /\.(jpg|png|gif)$/,
            use: [ 'url-loader?limit=54054&name=[hash:8][name].[ext]']
          }
        ]
      },
    //配置开发模式，消除打包警告
    mode:"development"
}