const nodemailer = require('nodemailer')

// const transporter = nodemailer.createTransport({
//     service : 'Gmail',
//     auth :{
//         user : "sableshubham890@gmail.com",
//         pass : "Shubham@1997",
//     },
//     tls: {
//         rejectUnauthorized: false
//       }
// })
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "sableshubham890@gmail.com",
      pass: "Shubham@1997",
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
  });

const mailOption = {
    from : 'sableshubham890@gmail',
    to : ' shubhamtestreact@gmail.com',
    subject : 'Sending email using nodejs',
    text : 'This is the way'
}

transporter.sendMail(mailOption, function(error,info){
    if(error){
        console.log(error)
    }else{
        console.log('email sent : ', info.response)
        console.log(info)
    }
})

