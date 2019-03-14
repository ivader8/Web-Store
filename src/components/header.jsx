import React from 'react';
import { NavLink } from 'react-router-dom'
import { UserConsumer } from './contexts/user-context';


const Header = ({ isLoggedIn, roles, username }) => {



    return (
        <header>
            <nav className="navbar-menu">
                <NavLink to="/" activeClassName="active" className="active" aria-current="page">Home</NavLink>
                <NavLink to="/store" activeClassName="active" >Store</NavLink>
                {
                    roles[0] === 'Admin' ?
                        <NavLink to="/create" activeClassName="active" >Create</NavLink>
                        : null
                }

                <NavLink to="/orders" activeClassName="active" >My Orders</NavLink>
                <NavLink to="/cart" activeClassName="active" >Cart</NavLink>

                {
                    isLoggedIn
                        ? <NavLink to="/logout">Logout</NavLink>
                        : <NavLink to="/login">Log in</NavLink>
                }
                {
                    isLoggedIn
                        ? <span className="isLoggedIn">Hello, {username}!</span>
                        : null
                }

            </nav>
        </header>
    );
};

const HeaderWithContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn, roles, username }) => (
                    <Header {...props} roles={roles} isLoggedIn={isLoggedIn} username={username} />
                )
            }
        </UserConsumer>

    )
};

export default HeaderWithContext;