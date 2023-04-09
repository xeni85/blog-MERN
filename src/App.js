import { Route, Routes } from 'react-router-dom';
import './App.css';
import Entry from './components/Entry';
import Layout from './components/Layout';
import Index from './components/IndexPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import { UserContextProvider } from './components/UserContext';
import CreateEntry from './components/CreateEntry';
import EntryPage from './components/EntryPage';

function App() {
  return (
    <UserContextProvider> 
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Index />} />
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/create' element= {<CreateEntry />}/>
        <Route path='/post/:id' element={<EntryPage />} />
        </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;
