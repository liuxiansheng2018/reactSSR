import axios from 'axios';

const changeList = (list) => ({
    type: 'change_home_list',
    list
})
export const getHomeList = () => {
    return (dispatch) => {
        axios.get('http://rap2api.taobao.org/app/mock/117401/example/1542131077628')
             .then((res) => {
                 const list = res.data.data;
                 dispatch(changeList(list))
             })
    }
}