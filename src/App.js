import { Route, Routes } from 'react-router-dom';
import './App.css';
import Entry from './components/Entry';
import Layout from './components/Layout';
import Index from './components/IndexPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Index />} />
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/register' element={<RegisterPage />} />
      </Route> 
    </Routes>
  );
}

export default App;
