import $ from "jquery"

import "./css/style.css"
import "./css/style.less"
import "./css/style.scss"

//导入的是运行版本,没有编译器
//import Vue from "vue"
//导入完成版
//import Vue from "vue/dist/vue.js"
//配置别名后，直接导入
// import Vue from "vue"

// var mycomp={
//     template:"<div><h1>子组件</h1></div>"
// }

// //需要编译器
// var vm = new Vue({
//     el:"#app",
//     data:{
//         msg:"webapck+vue项目整合"
//     },methods: {
        
//     },
//     components:{
//         mycomp
//     }
// })

import Vue from "vue"
//导入vue单文件组件
import mycomp from  "./mycomp.vue"

var vm = new Vue({
    el:"#app",
     data:{
         msg:"webapck+vue项目整合"
     },methods: {
        
     },
    //  render(createElements){
    //      return createElements(mycomp)
    //  }
    render:c=>c(mycomp)
 })