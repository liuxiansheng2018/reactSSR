var express = require('express');
import proxy from 'express-http-proxy';
var app = express();
import React from 'react'
import {render} from './utils'
//在服务器上虚拟Dom转换成 字符串    消耗服务器端性能
//在客户端上虚拟Dom转换成 真实dom   消耗浏览器端性能
// const context = renderToString(<Home />)
import {getStore} from '../store';
import {matchRoutes} from 'react-router-config';
import routes from '../Routes';

app.use(express.static('public'));
// app.use('/app', proxy('http://rap2api.taobao.org'), {
//     proxyReqPathResolver: function (req) {
//         console.log(req.url)
//     }
// })
app.get("*", function(req,res) { 
    const store = getStore(); 
    const matchedRoutes = matchRoutes(routes, req.path) //匹配多级路由
    const promises = [];
    
    matchedRoutes.forEach(item => {
        if( item.route.loadData ) {
            promises.push(item.route.loadData(store))
        }    
    })
   Promise.all(promises).then( () => {
    const context = {
        css: []
    };
        res.send(render(store,routes,req,context))
    })


});

var server = app.listen(4000)