const API_URL = 'http://localhost:4000';
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/auth/signup`,
  SIGN_IN: `${API_URL}/auth/signin`,
  GET_USER: `${API_URL}/auth/me`,
};

export const APP_ROUTES = {
  SIGN_UP: '/Inscription',
  SIGN_IN: '/Connexion',
  DASHBOARD: '/dashboard',
  ADD_BOOK: '/Ajouter',
  BOOK: '/livre/:id',
};
