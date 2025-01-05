const nodemailer = require('nodemailer');

// Настройки для Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'olya12414@gmail.com', 
    pass: 'pbew flkx vgvl ypaf'    
  }
});

// Функция отправки письма
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

// async function testEmail() {
//   const email = 'olgaolga2414@gmail.com'; // Получатель
//   const subject = 'Тестовое письмо';
//   const message = 'Это тестовое письмо, отправленное с помощью Nodemailer.';

//   try {
//     const result = await sendModeratorDecision(email, subject, message);
//     console.log('Email отправлен успешно:', result);
//   } catch (error) {
//     console.error('Ошибка при отправке email:', error);
//   }
// }

// testEmail();


module.exports = sendModeratorDecision;




// async function handleModeratorDecision(decision, email) {
//   const subject = 'Moderator Decision';
//   const message = `Ваше предложение было ${decision}. Спасибо за использование нашей платформы!`;

//   try {
//     await sendModeratorDecision(email, subject, message);
//     console.log('Decision email sent successfully.');
//   } catch (error) {
//     console.error('Failed to send decision email:', error);
//   }
// }

// // Пример вызова
// handleModeratorDecision('одобрено', 'user_email@example.com');

