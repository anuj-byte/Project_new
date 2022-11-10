import logo from './logo.svg';
import './App.css';
import MainPage from './components/main';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import React from 'react';
import Second from './components/second';
import Third from './components/third';
import Fourth from './components/fourth';
import ImageUpload from './components/photo_upload';

import ContactForm from './components/Addnote';

function App() {
  return (
   <div>
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<MainPage></MainPage>}></Route>
     <Route path='/second' element={<Second></Second>}> </Route>
     <Route path ="/third" element={<Third></Third>}></Route>
     <Route path='/fourth' element={<Fourth></Fourth>}></Route>
     <Route path='/images' element={<ImageUpload></ImageUpload>}></Route>
     <Route path="/note" element={<ContactForm></ContactForm>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
