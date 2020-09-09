import $ from "jquery"

import "./css/style.css"
import "./css/style.less"
import "./css/style.scss"

$(function(){
    $("li:odd").css("backgroundColor","red")
    $("li:even").css("backgroundColor","green")
})