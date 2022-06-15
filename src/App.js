import './App.css';
import { Route, Link } from 'react-router-dom'
import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';


function App() {
  const [usersData, setUsersData] = useState([{
    "name": "shreyash",
    "email": "shreyash@gmail.com",
    "contact_number": "123456",
    "gender": "Male"
  },])

  const addUser = (formData) => {
    setUsersData([formData, ...usersData])
  }
  return (
    <>
      <ul className="nav">
        <li className="nav-item">
          <Link to='/userprofile'>


            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button type="submit" className="btn btn-primary btn-lg">User Profile</button>

            </div>


          </Link>
        </li>

        <li className="nav-item">
          <Link to='/dashboard'>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button type="submit" className="btn btn-primary btn-lg">Dashboard</button>

            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/signup'>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>

            </div>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/login'>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button type="submit" className="btn btn-primary btn-lg">Login</button>

            </div>
          </Link>
        </li>

      </ul>
      <div className="App">

        <div>
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/userprofile" component={UserProfile} />
          <Route path="/signup" render={props => <RegistrationForm {...props} addUser={addUser} />} />
          <Route path="/dashboard" render={props => <Dashboard usersData={usersData} />} />
        </div>


      </div>


    </>
  );
}

export default App;
