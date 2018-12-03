import React from 'react';
import {Route} from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import App from './App';
export default [{
    path: '/',
    component: App,
    routes: [{
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home'
    },{
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
        //loadData: Home.loadData
    }]
}]




// export default (
//     <div>
//         {/* <Route path="/" exact component={Home} ></Route> */}
//         <Route path="/login" component={Login} ></Route>
//     </div>
// )