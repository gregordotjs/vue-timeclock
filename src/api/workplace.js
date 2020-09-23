import axios from 'axios';
const endpoint = 'workplaces'

export function getWorkplaces() {
    return axios.get(`/api/${endpoint}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}
