import Container from 'react-bootstrap/Container';
import {Nav } from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./main.css"

import {useNavigate} from "react-router-dom"


function MainPage() {
    const navigate=useNavigate() 
    return (
      
      <body className='body2'>
      <nav className="navbar23">
        
        <h1 className="logo43">Cocci Water</h1>
      
        <ul className="nav-links102">
            
        
    
          <div className="menu102">
            <li className='li12'><a className='a12' href="/">Home</a></li>
            <li className='li12'><a  className='a12'  href="/login">Login</a></li>
            <li className='li12'><a  className='a12' href="/">Pricing</a></li>
            <li className='li12'><a  className='a12' href="/">Contact</a></li>
          </div>
         
        </ul>
      </nav>
      <div class="main">
        <h1>Welcome to our Arena </h1>
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div className="card_image"><img src="image/image1.jpg"/></div>
              <div class="card_content">
                <h2 class="card_title">Coconut</h2>
                <h2 className='card_title'>Rs 200/- </h2>
                <p class="card_text">take our coconut and enjoy your day</p>
                <button class="btn card_btn">Add to cart</button>
              </div>
            </div>
          </li>
          
         
          
        </ul>
      </div>
      <div>
      <h2>Whatsapp</h2>
      <a href="https://wa.me/9193488443">Whatsapp order here</a>
      </div>
      <div>
      <a href="/images">Directly upload photo of your order here</a>
      
      <a href="tel:8144156561">Call order</a>
      <a href="/note">Add note</a>
      </div>
      <h3 class="made_by">Made with ♡</h3>
      <footer>
   <div class="content">
     <div class="left box">
       <div class="upper">
         <div class="topic">About us</div>
         <li>We are the leading seller of these era.</li>
       </div>
       <div class="lower">
         <div class="topic">Contact us</div>

         <div class="email">
           <a href="#" className='linki'><i class="fas fa-envelope"></i>abc@gmail.com</a>
         </div>
       </div>
     </div>
     <div class="middle box">
       <div class="topic">Our Services</div>
       <div><li>Easy return</li></div>
       <div><li>Home delivery</li></div>
       <div><li>Replacement</li></div>
     </div>
     <div class="right box">
       <div class="topic" >Subscribe us</div>
       <form  className="change" action="#">
         
         <div class="media-icons">
           <a href="#" className="icon" ><i class="fab fa-facebook"></i></a>
           <a href="#" className="icon"><i class="fab fa-instagram"></i></a>
           <a href="#" className="icon"><i class="fab fa-twitter"></i></a>
           <a href="#" className="icon"><i class="fab fa-youtube"></i></a>
           <a href="#" className="icon"><i class="fab fa-linkedin-in"></i></a>
         </div>
       </form>
     </div>
   </div>
   </footer>
    </body>
    );
}
export default MainPage;
/*function MainPage(){
  const navigate=useNavigate() 
  
  return(
    <body className='exos'>
      <h1 className='alpha'>E</h1>
      <h2 className='alpha2'>Endoxous</h2>
      <h1 className='alpha3'>International Private Ltd.</h1>
      <button className='exosbutton' onClick={() => navigate('/second')}></button>
      
    </body>
  );
}
export default MainPage;*/