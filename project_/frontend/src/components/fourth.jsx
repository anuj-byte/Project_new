import Container from 'react-bootstrap/Container';
import {Nav } from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./fourth.css"
import {useNavigate} from "react-router-dom"
function Fourth(){
    return(
        <body>
        <div class="main">
        <h1>Responsive Card Grid Layout</h1>
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_image"><img src="https://picsum.photos/500/300/?image=10"/></div>
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
      
      <h3 class="made_by">Made with ♡</h3>
        </body>
    )
}
export default Fourth;