import axios from 'axios';
const KEY = 'AIzaSyC_kxp-CU53mRcn4G3_X8r113y-yVAjVrU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 5,
        key : KEY
    }
});
