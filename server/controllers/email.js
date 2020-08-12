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
    html: `<h1>This is an email HTML test ${req.body.data[2].name}</h1>` // will get this from req body
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

// fetch request payload
// {
//   data: [
//     {
//       business_status: 'OPERATIONAL',
//       formatted_address: "The Regent's Park, The Park Office the Storeyard Inner Circle, London NW1 4NR, United Kingdom",
//       geometry: [Object],
//       icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
//       name: 'The Royal Parks',
//       opening_hours: [Object],
//       photos: [Array],
//       place_id: 'ChIJtVaRHNsadkgRuD-x0eYNJ7g',
//       plus_code: [Object],
//       rating: 4.7,
//       reference: 'ChIJtVaRHNsadkgRuD-x0eYNJ7g',
//       types: [Array],
//       user_ratings_total: 167,
//       day: 0,
//       inMyList: true
//     },
//     {
//       business_status: 'OPERATIONAL',
//       formatted_address: 'The Old Police House Hyde Park, London W2 2UH, United Kingdom',
//       geometry: [Object],
//       icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png',
//       id: '45bf5bfed2c45956c870d483587b6b2657e8a6af',
//       name: 'The Royal Parks',
//       opening_hours: [Object],
//       photos: [Array],
//       place_id: 'ChIJD7QNyUkFdkgRBsgqLrVuxmQ',
//       plus_code: [Object],
//       rating: 4.5,
//       reference: 'ChIJD7QNyUkFdkgRBsgqLrVuxmQ',
//       types: [Array],
//       user_ratings_total: 74,
//       day: 0,
//       inMyList: true
//     },
//     {
//       business_status: 'OPERATIONAL',
//       formatted_address: '52 Mulgrave Rd, London NW10 1BT, United Kingdom',
//       geometry: [Object],
//       icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
//       name: 'Gladstone Park',
//       opening_hours: [Object],
//       photos: [Array],
//       place_id: 'ChIJ99IK4v8QdkgRZNGsdKK0pb8',
//       plus_code: [Object],
//       rating: 4.5,
//       reference: 'ChIJ99IK4v8QdkgRZNGsdKK0pb8',
//       types: [Array],
//       user_ratings_total: 2174,
//       day: 0,
//       inMyList: true
//     },
//     {
//       business_status: 'OPERATIONAL',
//       formatted_address: 'Millbank, London SW1P 3JA, United Kingdom',
//       geometry: [Object],
//       icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/generic_recreational-71.png',
//       id: 'db4c89034776b7a8445313e5a6f86ccbf5956cd2',
//       name: 'Victoria Tower Gardens South',
//       opening_hours: [Object],
//       photos: [Array],
//       place_id: 'ChIJg2hXyukEdkgRn3TPclh3dFs',
//       plus_code: [Object],
//       rating: 4.5,
//       reference: 'ChIJg2hXyukEdkgRn3TPclh3dFs',
//       types: [Array],
//       user_ratings_total: 2589,
//       day: 0,
//       inMyList: true
//     }
//   ],
//   email: 'rushabh.r.mehta@gmail.com'
// }