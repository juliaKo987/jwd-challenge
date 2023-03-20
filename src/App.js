import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './parts/Header';
import Footer from './parts/Footer';
import MainPage from './pages/Main/MainPage';
import ReportPage from './pages/Report/ReportPage'
import ErrorPage from './pages/ErrorPage';


function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/report' element={<ReportPage />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
