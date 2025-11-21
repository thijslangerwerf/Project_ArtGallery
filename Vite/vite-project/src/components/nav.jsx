import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      test
        <img src={logo} alt="Logo" />
    <Link to='/'>Home</Link> <br></br>
    <Link to='/jobs'>Jobs</Link>
    </div>
  )
}

export default NavBar
