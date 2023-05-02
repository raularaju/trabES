import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import SignUpPage from './components/SignUp/SignUp';
import ProductsPage from './components/Products/ProductsPage'
import './App.css'
function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route index element={<LoginPage />} />
          <Route
            path="/products"
            element={<ProductsPage />}
          />
          <Route
            path="/signUp"
            element={<SignUpPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
