import React from 'react'
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../Routes';
import getStore from '../store';
import {Provider} from 'react-redux';

export const render = (req) => {
    const content = renderToString(( //context 必须要填
    <Provider store={getStore()}>
        <StaticRouter context={{}} location={req.path}> 
            {Routes}
        </StaticRouter>
    </Provider>
    ))
return  `
        <html>
            <header>
                <title>ReactSSR</title>
                <body>
                    <div id="root">${content}</div>                       
                </body>
                <script src="/index.js"></script>
            </header>
        </html>
        `
    }