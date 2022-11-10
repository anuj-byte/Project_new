const router= require('express').Router();
const multer = require("multer");
const {v4:uuidv4} =require('uuid');
const path = require('path')
let User = require("../model/photo_model")
const nodemailer=require("nodemailer")
//mail login
let mailTransporter=nodemailer.createTransport({
    service:"hotmail",
    auth:{
        user:"capstone_project_wipro@outlook.com",
        pass:"Capstone123"
    }
})
//photo saving and geting there name//
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'images');
    },
    filename:function(req,file,cb){
        cb(null,uuidv4()+ "-"+ Date.now() + path.extname(file.originalname));
    }
});
const fileFilter =(req,file,cb)=>{
    const allowedFileTypes = ['image/jpeg','image/jpg','image/png'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true);
    }
    else{
        cb(null,false);
    }
}

let uploads = multer({storage,fileFilter});
router.route('/add').post(uploads.single('photo'),(req,res)=>{
    const name =req.body.name;
    const phone=req.body.phone;
    const adress=req.body.adress;
    const photo =req.file.filename;
   
    const newUserData={
        name,
        photo,
        phone,
        adress
    }
    //writting message and sending mail//
    const detail={
        from:"capstone_project_wipro@outlook.com",
        to:"sanuj3781@gmail.com",
        cc:"myverma1999@gmail.com",
        subject:`New Order`,
        text:`name:${name} ,phone:${phone} ,adress:${adress}`,
       attachments:[{
        filename:`${photo}`,path:`./images/${photo}`
       }]


    }
    mailTransporter.sendMail(detail,(err)=>{
        if(err){
            console.log("error occur please check")
        }
        else{
            console.log("email has been sent")
        }
    })
    const newUser = new User(newUserData)

    newUser.save()
            .then(()=>res.json("User Added"))
            .catch(err=>res.status(400).json('Error'+ err));
})
router.route('/rec').get((req,res)=>{
    User.find()
        .then(user=>res.json(user))
        .catch(err=>res.json(err))
})
module.exports = router;