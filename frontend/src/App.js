import { BrowserRouter, Routes, Route } from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

// pages & components
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import AddEmployee from './components/AddEmployee'
// import Employee from './pages/Employee'

axios.defaults.baseURL =  "http://localhost:4000/api/employees"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/employee" element={<AddEmployee/>} />
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Product />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;