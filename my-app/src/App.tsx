import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login/LoginPage';
import DashboardPage from './components/DashboardPage';
import ProductsPage from './components/Products/ProductsPage'
import './App.css'
function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
