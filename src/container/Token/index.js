import axios from 'axios';

const Token = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    axios.post('http://localhost:4500/token', {
        token: token
    })
      .then(function (response) {
        console.log(response);
    })
      .catch(function (error) {
        console.log(error);
    });
};

export default Token;