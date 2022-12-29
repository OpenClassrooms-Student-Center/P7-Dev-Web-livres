import axios from 'axios';
import { API_ROUTES } from '../utils/constants';

export function storeInLocalStorage(token, id) {
  localStorage.setItem('token', token);
  localStorage.setItem('id', id);
}

export function getFromLocalStorage(item) {
  return localStorage.getItem(item);
}

export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getFromLocalStorage('token');
    const id = getFromLocalStorage('id');
    if (!token) {
      return defaultReturnObject;
    }
    return { authenticated: true, user: { id, token } };
  } catch (err) {
    console.error('getAuthenticatedUser, Something Went Wrong', err);
    return defaultReturnObject;
  }
}

export async function getBooks() {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_ROUTES.BOOKS}`,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getBook(id) {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_ROUTES.BOOKS}/${id}`,
    });
    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getBestRatedBooks() {
  try {
    const response = await axios({
      method: 'GET',
      url: `${API_ROUTES.BEST_RATED}`,
    });
    return response.data;
  } catch (e) {
    console.error(e);
    return [];
  }
}
export async function deleteBook(id) {
  try {
    await axios.delete(`${API_ROUTES.BOOKS}/${id}`);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export async function rateBook(id, userId, rating) {
  const data = JSON.stringify({
    userId,
    rating: parseInt(rating, 10),
  });

  try {
    return await axios.post(`${API_ROUTES.BOOKS}/{${id}/rating`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  } catch (e) {
    console.error(e);
    return e.message;
  }
}

export async function addBook(data) {
  const userId = localStorage.getItem('id');
  const book = {
    userId,
    title: data.title,
    author: data.author,
    year: data.year,
    genre: data.genre,
    ratings: [{
      userId,
      grade: parseInt(data.rating, 10),
    }],
    averageRating: parseInt(data.rating, 10),
  };

  const bodyFormData = new FormData();
  bodyFormData.append('book', JSON.stringify(book));
  bodyFormData.append('image', data.file[0]);

  try {
    return await axios({
      method: 'post',
      url: `${API_ROUTES.BOOKS}`,
      data: bodyFormData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
}

export async function updateBook(data, id) {
  const userId = localStorage.getItem('id');

  const bodyFormData = new FormData();
  let newData;
  const book = {
    id,
    userId,
    title: data.title,
    author: data.author,
    year: data.year,
    genre: data.genre,
  };
  if (data.file[0]) {
    bodyFormData.append('book', JSON.stringify(book));
    bodyFormData.append('image', data.file[0]);
    newData = { ...bodyFormData };
  } else {
    newData = JSON.stringify(book);
  }

  try {
    const newBook = await axios({
      method: 'put',
      url: `${API_ROUTES.BOOKS}`,
      data: newData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return newBook;
  } catch (err) {
    console.error(err);
    return { error: true, message: err.message };
  }
}
