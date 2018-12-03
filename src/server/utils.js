import React from 'react'
import {renderToString} from 'react-dom/server';
//import {StaticRouter, Route,matchPath} from 'react-router-dom';  //matchPath只能匹配单个路由
import {StaticRouter, Route} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import {Provider} from 'react-redux';

export const render = (store,routes,req,context) => {
    
    
    //如果在这里拿到异步数据，填充到store;

    //根据路由的路径，在store加数据
    /**
     * 匹配单个路由的时候可以使用
     routes.some( route => {
        const match = matchPath(req.path,route); //让路由里面的组件匹配对应的路径
        if( match ){
            matchRoutes.push(route)
        }
    } )
     */
    //让matchRoutes里面所有的组件，对应的loadData方法各执行一遍
   
    
        const content = renderToString(( //context 必须要填
            <Provider store={store}>
                <StaticRouter context={{}} location={req.path}> 
                <div>
                    {renderRoutes(routes)}
                </div>
                </StaticRouter>
            </Provider>
            ))
            const cssStr = context.css.length ? context.css.json('\n') : "";
             return   `
                <html>
                    <header>
                        <title>ReactSSR</title>
                        <style>${cssStr}</style>
                        <body>
                            <div id="root">${content}</div>                       
                        </body>
                        <script>
                            window.context = {
                                state: ${JSON.stringify(store.getState())}
                            }
                        </script>
                        <script src="/index.js"></script>
                    </header>
                </html>
                `
       // console.log(store.getState())
    
    
    }