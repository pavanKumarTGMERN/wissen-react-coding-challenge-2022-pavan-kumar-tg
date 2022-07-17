import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useStateInforContext } from '../../context/states';
import { toast } from 'react-toastify';

export const Dashboard = () => {
  const { users, setUsers } = useStateInforContext();
  const token = localStorage.getItem('token');
  let fetchedUsers = [];

  useEffect(() => {
    const getUsers = async () => {
      var reqParams = {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-type': 'application/json',
        },
      };
      await axios
        .post('https://reqres.in/api/unknown', {}, reqParams.headers)
        .then((res) => {
          toast.success(`Fetched users successfully`);
          setUsers(res.data);
          history.push('/dashboard');
        })
        .catch((e) => {
          toast.error('Failed to fetch users');
        });
    };
    getUsers();
  }, []);

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
      {Object.keys(users).forEach(function (key) {
        fetchedUsers.push(<tr></tr>);
        fetchedUsers.push(
          <td>
            <strong>{key}</strong>
          </td>
        );
        fetchedUsers.push(<td value={key}>{users[key]}</td>);
      })}
      <Table>{fetchedUsers}</Table>
      <Button type="submit" onClick={() => logout()}>
        Logout
      </Button>
    </Container>
  );
};
