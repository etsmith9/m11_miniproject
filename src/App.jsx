import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import CustomerList from './components/CustomerList';
import CustomerFormWrapper from './components/CustomerFormWrapper';
import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import ProductDetails from './components/ProductDetails';
import ProductFormWrapper from './components/ProductFormWrapper';
import PlaceOrderForm from './components/PlaceOrderForm';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='app-container'>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/add-customer' element={<CustomerFormWrapper />} />
          <Route path='/edit-customer/:id' element={<CustomerFormWrapper />} />
          <Route path='/customer' element={<CustomerList />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/products/:id' element={<ProductDetails />} /> 
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/edit-product/:id' element={<AddProduct />} />
          <Route path='/place-order' element={<PlaceOrderForm />} />
          <Route path='*' element={<NotFound />} /> 
        </Routes>
    </div>
  );
}

export default App;
