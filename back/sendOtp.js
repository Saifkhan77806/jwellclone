const nodemailer = require('nodemailer');
let otps;
require('dotenv').config()

const sendmail = (otp, email) =>{
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
        subject: "Verify OTP from K's media",
        text: 'This was designed and created by Saif khan',
        html: `<h1><b>${otp}</b> Verify otp </br> enter otp at the website to Verify !</h1></br><p>And also do not share this otp !</p>`
    }).then((info)=>{
        otps = otp;
        console.log({info});
    }).catch(console.error);
}

// sendmail(123, "saifkhan77806@gmail.com");



module.exports = {sendmail, otps}