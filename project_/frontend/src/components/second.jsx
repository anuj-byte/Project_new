import Container from 'react-bootstrap/Container';
import {Nav } from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./main.css"
import "./second.css"
import {useNavigate} from "react-router-dom"
function Second(){
    const navigate=useNavigate() 
    return(
        <body>
       <h1 className='phone'>Enter phone number</h1>
       <input  className='input1' /> 
       <button className='butto2' onClick={() => navigate('/third')}>click </button>
       </body>

    )
}
export default Second;