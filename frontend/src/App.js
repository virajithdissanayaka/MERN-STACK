import { BrowserRouter, Routes, Route } from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//for upload image
import { useEffect, useState } from 'react'
import axios from 'axios'

// pages & components
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './components/Navbar'

function App() {
  //for upload image
  const [file, setFile] = useState()
  const [image, setImage] = useState()
  const handleUpload = (e) => {
    const formdata = new FormData()
    formdata.append('file',file)
    axios.post('http://localhost:4000/upload', formdata)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  //for display image
  useEffect(()=>{
    axios.get('http://localhost:4000/getimage')
    .then(res => setImage(res.data[0].image))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Product />}/>
          </Routes>
        </div>
      </BrowserRouter>

      <div>
        <input type='file' onChange={e => setFile(e.target.files[0])} />
        <button onClick={handleUpload}>Upload</button>
        <br />
        <img src={'http://localhost:4000/images/' + image} alt=""/>
      </div>

    </div>
  );
}

export default App;