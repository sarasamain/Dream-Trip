const nodemailer = require('nodemailer');

exports.sendEmail = (req, res) => {
  console.log(req.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.EMAIL,
    to: req.body.email, // will get this from req body
    subject: 'test subject line', // will get this from req body
    html: `<h1>This is an email HTML test</h1>` // will get this from req body
  }

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.send('error') // if error occurs send error as response to client
    }
    else {
      console.log('Email sent: ' + info.response);
      res.send('Sent Successfully')//if mail is sent successfully send Sent successfully as response
    }
  });
}