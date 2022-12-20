import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/Home/Home';
import Book from './pages/Book/Book';
import { APP_ROUTES } from './utils/constants';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path={APP_ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path={APP_ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={APP_ROUTES.BOOK} element={<Book />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
