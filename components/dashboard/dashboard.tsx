import * as React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const Dashboard = () => {
  let history = useHistory();
  const username = localStorage.getItem('email');

  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.clear();
    return history.push('/');
  };

  return (
    <Container className="login form-group">
      <h1>Welcome {username}</h1>
      <Button type="submit" onClick={() => logout()}>
        Logout
      </Button>
    </Container>
  );
};
