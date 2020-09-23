import axios from 'axios';
const endpoint = 'user';

export function getUserInfo() {
    return axios.get(`/api/${endpoint}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}
