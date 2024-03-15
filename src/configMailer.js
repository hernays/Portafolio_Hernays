import nodemailer from 'nodemailer';
import "dotenv/config";

 const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'hernays12@gmail.com', // generated ethereal user
      pass: process.env.CLAVEEMAIL, // generated ethereal password
    },
  });

  transporter.verify().then( () => {
      console.log('funcionando ok')
  }).catch(() => {
    console.log('error en conexion de nodeMailer')
  })

  export default transporter;