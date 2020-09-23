import axios from 'axios';
const endpoint = 'timeclock';

export function getTimesheet(week, year) {

    return axios.get(`/api/${endpoint}/${week}_${year}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export function postTimesheet(payload) {
    return axios.post(`/api/${endpoint}/add`, payload, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}

export function deleteTimesheet(id) {
    return axios.get(`/api/${endpoint}/${id}/remove`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
}