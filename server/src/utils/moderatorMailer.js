const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'olya12414@gmail.com', 
    pass: 'pbew flkx vgvl ypaf'    
  }
});

async function sendModeratorDecision(email, subject, text) {
  try {
    const mailOptions = {
      from: 'olya12414@gmail.com', 
      to: email,                    
      subject: subject,             
      text: text                    
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

module.exports = sendModeratorDecision;




