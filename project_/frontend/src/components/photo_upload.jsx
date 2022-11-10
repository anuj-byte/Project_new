import { useState } from "react";
import axios from "axios";
import './photo.css'

const ImageUpload=()=>{
    const[newdata,setnewdata]=useState({
        name:"",
        photo:"",
        phone:"",
        adress:""
       
    })
    const [phone, setPhone] = useState("");
    const [adress, setAdress] = useState("");
    const handleChange=(e,statement)=>{
        if(statement==="name"){
          
            setnewdata({...newdata,[e.target.name]:e.target.value})
        }
        if(statement==="price"){
           
            setnewdata({...newdata,[e.target.price]:e.target.value})
        }
        if(statement==="adress"){
           
            setnewdata({...newdata,[e.target.adress]:e.target.value})
        }
    }
    const handlePhoto=(e)=>{
        setnewdata({...newdata,photo:e.target.files[0]})

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formdata=new FormData()
        formdata.set('photo',newdata.photo);
        formdata.set("name",newdata.name)
        formdata.set("phone",phone)
        formdata.set("adress",adress)
        console.log(phone)
       
        console.log(formdata)
        axios.post("http://localhost:3001/users/add/",formdata)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <div>
    <form onSubmit={handleSubmit} className="Add-form" encType='multipart/form-data'>
     <h1>Add Product here</h1>
     <div className="input">
     <input className="input43" type="text" placeholder='name' required name="name" id='fname' onChange={(e)=>handleChange(e,"name")}/>
     </div>
     <div className="input">
      <input className="input43" type="text" placeholder='phone number' required name="phone" id="phone"  pattern="[0-9]{10}" onChange={(e)=>setPhone(e.target.value)} />
      </div>
      <div className="input">
      <input className="input43" type="text" placeholder='adress' required adress="adress" id="fadress"   onChange={(e)=>setAdress(e.target.value)} />
        
      </div>
      <div className="input">
      <input className="photo" type="file" accept=".png ,.jpg,.jpeg" required name='photo' onChange={handlePhoto} />
      </div>
      <div className='bg'>
    
      </div>
     
      <input className="buttone" type="submit" />
    </form>
    </div>
    )
}
export default ImageUpload