import React from 'react';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {getHomeList} from './store/actions';
import styles from './style.css';
class Home extends React.Component {
    constructor(props) {
        super(props)
    }

// componentWillMount () {
//     if( this.props.staticContext ) {
//         this.props.staticContext.css.push(styles._getCss());
//     }
//    // console.log(styles._getCss());
// }

componentDidMount () {
    if(!this.props.list.length) {
        this.props.getHomeList()
    }   
}

getList () {
    const {list} = this.props;
    return list.map( item => 
        <div key={item.id}>{item.title}</div>
    )
}
    render () {
       return (
        <div className={styles.test}>
            {/* <Header /> */}
            <div>This is Dell !!{this.props.name}</div>
            {this.getList()}
            <button onClick={ () => {alert('click')}}>Click</button>
        </div>)
    }
}
const mapStateToProps = state =>({
    list: state.home.newList,
    name: state.home.name
});

Home.loadData= (store) => {
    //在服务器端渲染之前，把这个路由数据提前加载好
   return store.dispatch(getHomeList())
}

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);