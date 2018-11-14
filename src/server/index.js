var express = require('express');
var app = express();
import React from 'react'
import {render} from './utils'
//在服务器上虚拟Dom转换成 字符串    消耗服务器端性能
//在客户端上虚拟Dom转换成 真实dom   消耗浏览器端性能
// const context = renderToString(<Home />)


app.use(express.static('public'))
app.get("*", function(req,res) {  
    res.send(render(req))
});

var server = app.listen(4000)