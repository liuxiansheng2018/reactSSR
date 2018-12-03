import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
import routes from '../Routes.js';
import {Provider} from 'react-redux';
import {getClientStore} from '../store';
import {renderRoutes} from 'react-router-config';

const App = () => {
    return (
      <Provider store= {getClientStore()}>
        <BrowserRouter>
        <div>
            {renderRoutes(routes)}
        </div>
        </BrowserRouter>
      </Provider>
    )
}
ReactDOM.hydrate(<App />   , document.getElementById("root"));