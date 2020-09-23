/*
{"email":"elvir@bosna.ba","password":"foo13"}' -H 'Content-Type: application/json'
  http://timeclock.loudandnoisy.com/api/auth/login
*/

import axios from 'axios';

export function Login(email, password) {
    return axios.post('/api/auth/login', {
        email,
        password
    });
}
