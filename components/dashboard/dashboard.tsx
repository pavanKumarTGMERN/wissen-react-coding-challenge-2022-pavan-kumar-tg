import axios from 'axios';
import * as React from 'react';
import { useEffect } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useStateInforContext } from '../../context/states';
import { toast } from 'react-toastify';

export const Dashboard = () => {
  const { users, setUsers } = useStateInforContext();
  let fetchedUsers = [];
  useEffect(() => {
    const getUsers = async () => {
      const token = localStorage.getItem('token');
      let reqParams = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      };
      await axios
        .post('https://reqres.in/api/unknown', {}, reqParams.headers)
        .then((res) => {
          setUsers(res.data);
          Object.keys(res.data).forEach(function (key) {
            fetchedUsers.push(<p>{res.data[key]}</p>);
          });
          toast.success(`Fetches users successfully`);
        })
        .catch((e) => {
          toast.error('Failed to fetch users');
        });
    };
    getUsers();
  }, [setUsers]);
  let history = useHistory();
  const username = localStorage.getItem('email');

  const logout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('token');
    localStorage.clear();
    return history.push('/');
  };

  return (
    users && (
      <Container className="login form-group">
        <h1>Welcome {username}</h1>
        {Object.keys(users).forEach(function (key) {
          fetchedUsers.push(<tr></tr>);
          fetchedUsers.push(
            <td>
              {key} : {users[key]}
            </td>
          );
        })}
        <Table>{fetchedUsers}</Table>
        <Button type="submit" onClick={() => logout()}>
          Logout
        </Button>
      </Container>
    )
  );
};
