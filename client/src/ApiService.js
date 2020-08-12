const BASE_URL = 'http://localhost:3079';

const apiService = {};

apiService.register = (user) => {
  console.log('apiService.register, user', user)
  return fetch(`${BASE_URL}/register`, {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
  .then((res) => {
      // console.log('register res', res.json());
      return res.json();
    })
    .then((token) => {
      console.log(token);
      return token;
    })
    .catch((err) => console.log('I got here', err));
};

apiService.login = (user) => {
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

apiService.profile = (accessToken) => {
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

apiService.logout = (tokenName) => {
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

export default apiService;
