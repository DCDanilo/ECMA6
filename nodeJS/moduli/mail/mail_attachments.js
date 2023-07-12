var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'danilo.decave@outlook.it',
    pass: 'polonio310'
  },
});

var mailOptions = {
  from: 'danilo.decave@outlook.it',
  to: 'danilo.decave@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Test nodeJs',
  attachments: [
    {
      path: './gatto.jpeg'
    }
  ]
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
