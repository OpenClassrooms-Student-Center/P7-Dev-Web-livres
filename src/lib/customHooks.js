import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { getAuthenticatedUser } from './common';
// import { APP_ROUTES } from '../utils/constants';

// eslint-disable-next-line import/prefer-default-export
export function useUser() {
  const [connectedUser, setConnectedUser] = useState(null);
  const [auth, setAuth] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    async function getUserDetails() {
      const { authenticated, user } = await getAuthenticatedUser();
      /*
      if (!authenticated) {
        navigate(APP_ROUTES.SIGN_IN);
        return;
      }
      */

      setConnectedUser(user);
      setAuth(authenticated);
    }
    getUserDetails();
  }, []);

  return { connectedUser, auth };
}
