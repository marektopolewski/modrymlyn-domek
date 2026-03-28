import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
import MainPage from './pages/MainPage';
import GrantPage from './pages/GrantPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/grant" element={<GrantPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
