import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { users } from 'api/user';
import { getAllUsers, getAllUsersFailure } from 'actions/user';
import Table from 'react-bootstrap/Table';

import './styles.scss';

function UserList() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allUsers = useSelector(state => state.users)

  useEffect(() => {
    dispatch(users(getAllUsers, getAllUsersFailure))
  }, [])

  const onUserRowClick = (user) => {
    history.push('/', user)
  }
  return (
    <div className='user-list'>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Age</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.filter((user) => user.role !== 'admin').map((user, index) => (
            <tr key={`${user.username}`} onClick={() => onUserRowClick(user)} className='user-row'>
              <td>{index+1}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {allUsers.filter((user) => user.role !== 'admin').length === 0 && (
        <div>No User Exists</div>
      )}
    </div>
  )
}

export default UserList;
