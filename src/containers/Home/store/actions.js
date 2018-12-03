import axios from 'axios';
import {CHANGE_LISt} from './contants';
const changeList = (list) => ({
    type: CHANGE_LISt,
    list
})
export const getHomeList = () => {
    // let url ="";
    // if(server) {
    //     url: 'http://rap2api.taobao.org/app/mock/117401/example/1542131077628'
    // } else {
    //     url: 'app/mock/117401/example/1542131077628'
    // }
    return (dispatch, url) => {
        //axios.get(url)
       return axios.get('http://rap2api.taobao.org/app/mock/117401/example/1542131077628')
             .then((res) => {
                 console.log(res)
                 const list = res.data.data;
                 dispatch(changeList(list))
             })
    }
}