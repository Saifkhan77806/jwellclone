const nodemailer = require('nodemailer');
let otps;
require('dotenv').config()


const sendToken = (email, token) =>{
    
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: 'khansaif86783@gmail.com',
      pass: process.env.EMAIL_PASS_KEY,
    },
  });
  
        transporter.verify().then(console.log).catch(console.error);
      
        transporter.sendMail({
        from: {
            name: "Jeweallity",
            address: "khansaif86783@gmail.com"
        },
        to : email,
        subject: "Loyal customer from Jeweallti",
        text: 'this jeweallity',
        html: `<h1><b>${token}</b>Token </br> you my loyal customer !</h1></br><p>this take it as gift </p>`
    }).then((info)=>{
        console.log({info});
    }).catch(console.error);
}

// sendmail(123, "saifkhan77806@gmail.com");



module.exports = {sendToken}