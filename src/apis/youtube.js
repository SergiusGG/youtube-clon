import axios from 'axios';


const KEY = 'AIzaSyCA_Z5gyHr_A5UkWi18WSarw7rWb_ItdQ4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
