/*var nm=require('nodemailer');
var tran=nm.createTransport(
    {
        service:'gmail',
        auth:{
            user:'udayreddyvari7081@gmail.com',
            password:'70817091'
        }

    });

    var optosend={
    

from:'udayreddyvari7081@gmail.com',
to:'udayreddy7091@gmail.com',
subject:'testing mail using nodejs',
text:"nodemailer and createTransport"

    };
    
    tran.sendMail(optosend,(err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("email send"+info.response);
        }
    });
*/

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',  // Replace with your email
        pass: 'your-app-password'      // Replace with an app password (not your normal password)
    }
});

const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'Hello, this is a test email from Node.js!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.error("Error sending email:", err);
    } else {
        console.log("Email sent successfully:", info.response);
    }
});
