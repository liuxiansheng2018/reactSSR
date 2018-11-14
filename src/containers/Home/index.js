import React from 'react';
import Header from '../../components/Header';
import {connect} from 'react-redux';
import {getHomeList} from './store/actions';
class Home extends React.Component {
    constructor(props) {
        super(props)
    }

componentDidMount () {
    this.props.getHomeList()
}
    render () {
       return (
        <div>
            <Header />
            <div>This is Dell !!{this.props.name}</div>
            {this.props.list.map( (item) => {
               return <div key={item.id}>{item.title}</div>
            } )}
            <button onClick={ () => {alert('click')}}>Click</button>
        </div>)
    }
}
const mapStateToProps = state =>({
    list: state.home.newList,
    name: state.home.name
});
const mapDispatchToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);