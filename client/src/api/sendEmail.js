const sendEmail = async (data, email) => {
  const url = 'http://localhost:3079/sendemail';
  const payload = {
    data, email
  }
  fetch(url,{
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(payload)
  })
  .then(res=>res.json())
  .catch(err => console.log(err));
}

module.exports = {
  sendEmail
};