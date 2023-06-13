import './App.css';
import Home from './Home';
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import Login from './Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />}></Route>                  
        </Routes>
        <Routes>
          <Route path="/" element={<Home />}></Route>           
        </Routes>
        <Routes>
          <Route path="/Checkout" element={<Header />}></Route>                  
        </Routes>
        <Routes>              
          <Route path="/Checkout" element={<Checkout />}></Route>  
        </Routes>
        <Routes>              
          <Route path="/CheckoutProduct" element={<CheckoutProduct />}></Route>  
        </Routes>
        <Routes>              
          <Route path="/login" element={<Login />}></Route>  
        </Routes>
      </Router>

    </div>
  );
}

export default App;
