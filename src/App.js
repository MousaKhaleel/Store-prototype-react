import logo from './logo.svg';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Payment from './Payment';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/Products" element={<Products />} />
            </Routes>
            <Routes>
                <Route path="/Payment" element={<Payment />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
