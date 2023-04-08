import { Route, Routes } from 'react-router-dom';
import './App.css';
import Entry from './components/Entry';
import Header from './components/Header';


function App() {
  return (
    <Routes>
      <Route index element={
            <main className="App">
            <Header />
            <Entry />
            <Entry />
            <Entry />
            </main>
      } />
    </Routes>
  );
}

export default App;
