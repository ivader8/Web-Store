import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import { UserConsumer } from './contexts/user-context';


const Header = ({ isLoggedIn, roles, username }) => {


    return (
        <header>
            <nav className="navbar-menu">
                <NavLink to="/" activeClassName="active" className="active" aria-current="page">Home</NavLink>
                {
                    roles[0] === 'Admin' ?
                        <Fragment>
                            <NavLink to="/usersAll" activeClassName="active" >Users</NavLink>
                            <NavLink to="/create" activeClassName="active" >Create</NavLink>
                            <NavLink to="/ordersAll" activeClassName="active" >All Orders</NavLink>
                        </Fragment>
                        : null
                        // <NavLink to="/myOrders" activeClassName="active" >My Orders</NavLink>
                    }


                {/* <NavLink to="/cart" activeClassName="active" >All Products</NavLink> */}

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