const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

exports.sendEmail = (req, res) => {
  console.log(req.body);
  const data = req.body.data

  const source =
  `<h1>Here's your Dream Trip Itinerary</h1>
  {{#each this}}
  <div style="
    border-style: solid;
    border-color: #95fcb0;
    border-width: thin;
    border-radius: 5px;
    margin: 10px;
    text-align:center;
    background-color: #d9ffe3"
  >
    <h2 style="
      color:blue;
      text-align:center;
      text-transform:uppercase;
      letter-spacing:2px;"
    >
      {{name}}
    </h2>
    <p style="
      color:#575757;
      text-align:left;
    >
      <strong>Address:</strong> {{formatted_address}}
    </p>
    <p style="
      color:#575757;
      text-align:left;
    >
      <strong>Rating:</strong> {{rating}}
    </p>
    <p style="
      color:#575757;
      text-align:left;
    >
      <strong>Day:</strong> {{day}}
    </p>
  </div>
  {{/each}}`

  const template = Handlebars.compile(source);
  const result = template(data);

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
    subject: 'Your Dream Trip Itinerary', // will get this from req body
    html: result
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
