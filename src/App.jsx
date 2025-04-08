import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';
import CustomerFormWrapper from './components/CustomerFormWrapper';
import NavigationBar from './components/NavigationBar';
import NotFound from './components/NotFound';
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
          <Route path='*' element={<NotFound />} /> 
        </Routes>
    </div>
  );
}

export default App;
