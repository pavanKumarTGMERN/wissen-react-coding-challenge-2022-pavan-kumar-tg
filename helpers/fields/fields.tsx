import * as React from 'react';
import axios from 'axios';
import { disclaimer } from '../../constants/disclaimer';
import { useStateInforContext } from '../../context/states';
import { Row, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { staticPassword } from '../../constants/protectedData';

export const Username = () => {
  const { username, setUsername } = useStateInforContext();

  const checkValidity = (event, regex) => {
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <Row>
      <label>Email</label>
      <input
        type="email"
        value={username}
        onKeyPress={(e) => checkValidity(e, /^([A-Za-z0-9@.])/)}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </Row>
  );
};

export const Password = () => {
  const { password, setPassword } = useStateInforContext();
  return (
    <Row>
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Row>
  );
};

export const Disclaimer = () => {
  const { isCheckedDisclaimer, setIsCheckedDisclaimer } =
    useStateInforContext();

  return (
    <Row className="form-group">
      <input
        className="form-check-input"
        type="checkbox"
        id="disclaimer"
        value={isCheckedDisclaimer}
        onChange={() => {
          setIsCheckedDisclaimer(!isCheckedDisclaimer);
        }}
      />
      <label className="form-check-label disclaimer" for="disclaimer">
        {disclaimer}
      </label>
    </Row>
  );
};

export const SubmitButton = () => {
  let history = useHistory();
  const {
    username,
    password,
    isCheckedDisclaimer,
    setToken,
    setIsCheckedDisclaimer,
  } = useStateInforContext();

  const login = async () => {
    let emailRegex = /\S+@\S+\.\S+/;
    if (!username) {
      toast.error('Email cannot be an empty field');
    } else if (!emailRegex.test(username)) {
      toast.error('Please enter a valid email ID');
    } else if (!password) {
      toast.error('Password is required');
    } else if (password !== staticPassword) {
      toast.error('Password is incorrect');
    } else if (!isCheckedDisclaimer && isCheckedDisclaimer === false) {
      toast.error('Please agree terms & conditions');
    } else {
      let data = {
        email: username,
        password: password,
      };
      await axios
        .post('https://reqres.in/api/login', data, {})
        .then((res) => {
          toast.success(`Login successful`);
          setToken(res.data.token);
          localStorage.setItem('email', username);
          localStorage.setItem('token', res.data.token);
          setIsCheckedDisclaimer(false);
          history.push('/dashboard');
        })
        .catch((e) => {
          toast.error('Failed to fetch login details');
        });
    }
  };

  return (
    <Row>
      <Button type="submit" onClick={() => login()}>
        Next
      </Button>
    </Row>
  );
};
