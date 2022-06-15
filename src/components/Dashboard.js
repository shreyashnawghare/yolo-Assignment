import React,{useEffect,useState} from 'react'
import axios from 'axios';

export default function Dashboard({usersData}) {
  const [users,setUsers] = useState(usersData)
  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/bhanushalimahesh3/mock-api/main/users.json')
    .then((responsePayload) => {
      setUsers(users.concat(responsePayload.data))
    })
  },[])
  return (
    <div className="container">
      <table className="table table-striped">
        <thead>

        <tr>
        <th>
          Name
        </th>
        <th>
          Email
        </th>
        <th>Contact</th>
        <th>Gender</th>
        </tr>
        </thead>
        <tbody>
      {users && users.map((user,index)=>(
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.contact_number}</td>
          <td>{user.gender}</td>
        </tr>
      ))}
        </tbody>
      </table>
    </div>
  )
}
