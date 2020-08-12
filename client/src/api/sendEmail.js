const sendEmail = async (data, email) => {
  
  let dataKeys = Object.keys(data);
  let newData = [];
  dataKeys
  .sort((a, b) => a - b)
  .forEach(el=>(newData.push(...data[el])));
  console.log(newData);
  
  const url = 'http://localhost:3079/sendemail';
  const payload = {
    data: newData,
    email: email
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