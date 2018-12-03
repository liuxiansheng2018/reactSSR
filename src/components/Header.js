import React from 'react';
import {Link} from 'react-router-dom'
class Header extends React.Component {
    // componentWillMount () {  勿删
    //     if( this.props.staticContext ) {
    //         this.props.staticContext.css.push(styles._getCss());
    //     }
    //    // console.log(styles._getCss());
    // }
    render () {
        return (
         <div>
             <Link to="/">Home</Link>
             <br />
             <Link to="/login">Login</Link>
         </div>
     )
    }
     
 }
 export default Header;