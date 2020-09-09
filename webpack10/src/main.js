import $ from "jquery"


import "./css/style.css"
import "./css/style.less"
import "./css/style.scss"

import "bootstrap/dist/css/bootstrap.css"

$(function(){
    $("li:odd").css("backgroundColor","red")
    $("li:even").css("backgroundColor","green")
})