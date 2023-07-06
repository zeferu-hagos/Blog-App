import { Link } from 'react-router-dom';
import './topar.css';

const TopBar = () => {
  const user = false;
  return (
    <div className='top'>
          <div className='topLeft'>
              <i className="topIcon fa-brands fa-facebook"></i>
              <i className="topIcon fa-brands fa-twitter"></i>
              <i className="topIcon fa-brands fa-pinterest"></i>
              <i className="topIcon fa-brands fa-instagram"></i>
          </div>
          <div className='topCenter'>
              <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to="/">HOME</Link>
                  </li>
          <li className='topListItem'>
          <Link className='link' to="/">ABOUT</Link>
                  </li>
          <li className='topListItem'>
          <Link className='link' to="/">CONTACT</Link>
                  </li>
          <li className='topListItem'>
          <Link className='link' to="/write">WRITE</Link>
                  </li>
          <li className='topListItem'>
            <Link className='link' to="/">{user && "Logout" }</Link>
                  </li>
              </ul>
          </div>
      <div className='topRight'>
        {
          
          user ? (
            <img className='topImage' src='/image/15.PNG' alt='' /> 
          ) : (
              <ul className="topList">
                <li className='topListItem'>
                  <Link className='link' to="/login">LOGIN</Link>,
                </li>
                <li className='topListItem'>
                  <Link className='link' to="/register">REGISTER</Link>,
                  </li>
            </ul>
      )
           
        }
              
              <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
          </div>
    </div>
  )
}

export default TopBar
