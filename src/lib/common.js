import axios from 'axios';
import { API_ROUTES } from '../utils/constants';

export function storeTokenInLocalStorage(token) {
  localStorage.setItem('token', token);
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem('token');
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getTokenFromLocalStorage();
    if (!token) {
      return defaultReturnObject;
    }
    const response = await axios({
      method: 'GET',
      url: API_ROUTES.GET_USER,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const { authenticated = false } = response.data;
    return authenticated ? response.data : false;
  } catch (err) {
    console.error('getAuthenticatedUser, Something Went Wrong', err);
    return defaultReturnObject;
  }
}

export async function getBooks() {
  try {
    const response = await axios({
      method: 'GET',
      url: './../data/data.json',
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getBook(id) {
  try {
    const response = await axios({
      method: 'GET',
      url: './../data/data.json',
    });
    console.log(response.data);
    return response.data.find((elt) => elt.id === id);
  } catch (err) {
    console.error(err);
    return null;
  }
}
