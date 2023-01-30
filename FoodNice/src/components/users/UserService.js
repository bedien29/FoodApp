//cho de goi len db
// import axiosInstance from '../../utils/axios';
// import constants from '../../utils/constants';
import axios from 'axios';
import {baseURL} from '../../utils/baseURL';

//co che bat dong bo cua js
//login
export const login = async (email, password) => {
  const data = {
    email,
    password,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post(`${baseURL}/users/login`, data, config);
  return response;
};

//register user
export const register = async (email, password, name) => {
  const data = {
    email,
    password,
    name,
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post(`${baseURL}/users/register`, data, config);
  return response;
};

//logout user
export const logout = async () => {
  const user = await axios.get(`${baseURL}/users/logout`);
  return user;
};

//load user
export const loadUserMe = async () => {
  const user = await axios.get(`${baseURL}/users/me`);
  return user;
};
