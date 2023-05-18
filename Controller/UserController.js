import UserModel from '../Models/Usermodel.js '
import bcrypt from "bcrypt";
import Mailgen from "mailgen";
import nodemailer from 'nodemailer'
export const Createuser = async function (req,res, next) {
    const { displayname, password, userEmail} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({displayname, hashedPassword, userEmail});
    const response = await newUser.save()
    try {
        if (response?._id) {
            return res.status(200).json({ success: true, message: "User created Success" });
        }
        else {
            return res.status(500).json({ success: false, message: "User created Failed" });
        }
    }
    catch (err) {
        return res.status(400).send({ message: err.message });
    }
}

export const Reset = async function (req,res, next) {
    const {userEmail,displayname}=req.body;
    const user = await UserModel.find({userEmail:userEmail})
    try{
        if(user){
            let random = (Math.random() + 1).toString(36).substring(7);
            const salt = await bcrypt.genSalt(10);
            const verifylink= await bcrypt.hash(random, salt);
            let config = {
                service: "gmail",
                auth: {
                  user: process.env.GMAIL,
                  pass: process.env.PASSWORD
                }
              }
              let transporter = nodemailer.createTransport(config)
              let MailGenerator = new Mailgen({
                theme: "default",
                product: {
                  name: "Mailgen",
                  link: "https://mailgen.js"
                }
              })
              let response = {
                body: {
                  action: {
                    instructions: `Dear ${displayname} your account password is reset, kindly use the below link 
                        ${verifylink}`,
                    button: {
                      color: '#48cfad', // Optional action button color
                      text: 'reset your account',
                      link: 'https://127.0.0.1/3000/resetpassword'
                    },
                    outro:"Thanks for using our services"  
                  }
                }
              };
              let mail = MailGenerator.generate(response)
              let message = {
                from: process.env.GMAIL,
                to: userEmail,
                subject: "reset password",
                html: mail
              }
              transporter.sendMail(message)
              const send=await UserModel.findOne({userEmail:userEmail},{hashedPassword:0})
            return res.status(200).json({success:true,data:send, message: "mail sent" })
        }
        else{
            return res.status(200).json({success:false, message: "No user found" })
        }
    }
    catch(err){
        return res.status(500).send({ message: err.message })
    }
}

export const Login = async (req, res) => {
    try {
      const {  userEmail, password } = req.body;
      console.log(userEmail, password)
      const userFromDB =await UserModel.find({userEmail:userEmail})
      console.log(userFromDB)
      const storedDbPassword =userFromDB[0].hashedPassword
      console.log(storedDbPassword)
      const isPasswordMatch = await bcrypt.compare(password, storedDbPassword);
      console.log(storedDbPassword,isPasswordMatch)
        //normal=storedpassword
      if (!isPasswordMatch || !userFromDB) {
        return res.status(400).send({ message: "Invalid Credentials" });
      }
      //const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);
      //const send=await UserModel.findOne({userEmail:userEmail},{hashedPassword:0})
      return res.send({ sucess:true,data: userFromDB,message: "Successfully Logged In" });
    }
    catch (err) {
      return res.status(500).send({ message: err.message })
    }; 
  }

