const BASE_URL = 'http://localhost:3079';

const apiServiceJWT = {};

apiServiceJWT.register = (user) => {
  console.log('apiService.register, user', user)
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res)
    .catch((err) => console.log('I got here', err));
};

apiServiceJWT.login = (user) => {
  console.log('apiService.login, user', user)
  return fetch(`${BASE_URL}/login`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiServiceJWT.profile = (accessToken) => {
  console.log('apiService.profile, accessToken', accessToken)
  return fetch(`${BASE_URL}/home`, {
    method: 'GET',
    credentials: 'include',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiServiceJWT.logout = (tokenName) => {
  localStorage.removeItem(tokenName);
  // return fetch(`${BASE_URL}/logout`, {
  //   method: 'POST',
  //   credentials: 'include',
  //   mode: 'cors',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${tokenName}`,
  //   },
  // })
  //   .then((res) => res)
  //   .catch((err) => console.log(err));
};

export default apiServiceJWT;
