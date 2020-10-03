import React from 'react'
import {Context} from '../Global/Context'
const Navbar = () => {
    const {register, user, loader, logout} = React.useContext(Context)
    // register
    const userRegister = () => {
        register();
    }
    // logout
    const logoutUser = () => {
        logout()
    }
    // checkUser
    const CheckUser = () => {
        if(!loader && user ) {
            return (
              <>
                <li>
                  <span>
                     <img className='img__user mr-3' src={user.photoURL} alt="image user" />
                  </span>
                </li>
                <li>
                  <button onClick={logoutUser} className="btnWebOne">
                    Logout
                  </button>
                </li>
              </>
            );
        } else {
            return (
              <>
                <li>
                  <button onClick={userRegister} className="btnWebOne">
                    Register with google
                  </button>
                </li>
              </>
            );
        }
    }
    return (
        <div className='navbar__nav fixed-top'>
            <div className="container d-flex align-items-center">
                <div className="navbar__logo flex-grow-1">
                    mesenger
                </div>
                <ul className="navbar_links list-unstyled flex-grow-1 text-right">
                    {!loader ? <CheckUser/>  : '....'}
                </ul>
            </div>
        </div>
    )
}

export default Navbar
