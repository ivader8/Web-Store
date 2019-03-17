import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./views/home"
import NotFound from "./views/not-found"
import Login from './views/login';
import Footer from './components/footer';
import { UserProvider, defaultUserState } from './components/contexts/user-context'
import AuthorizedRouteWithContext from './components/authorized-route';
import LogoutWithContext from './views/logout';
import CreateBookWithContext from './views/create-book';
import RegisterWithContext from './views/register';
import HeaderWithContext from './components/header';
import UsersAll from './views/usersAll';
import OrdersAll from './views/ordersAll';
import CreateOrderWithContext from './views/create-order';
import SuccessOrderMessage from './views/success-order-message';

class App extends Component {
    constructor(props) {
        super(props);

        const userFromStorage = window.localStorage.getItem('user')
        const parsedUser = userFromStorage ? JSON.parse(userFromStorage) : {};

        this.state = {
            user: {
                ...defaultUserState,
                ...parsedUser,
                updateUser: this.updateUser,
            }
        };
    }


    updateUser = (user) => {
        this.setState({ user });
    };

    render() {
        const { user } = this.state;
        return (
            <div>
                <Router>
                    <Fragment>
                        <UserProvider value={user}>
                            <HeaderWithContext isLoggedIn={user.isLoggedIn} />
                            <Switch>
                                <Route path="/successfullyPlacedOrder" component={SuccessOrderMessage} />
                                <Route path="/" exact component={Home} />
                                <AuthorizedRouteWithContext path="/usersAll" component={UsersAll} />
                                <AuthorizedRouteWithContext path="/ordersAll" component={OrdersAll} />
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={RegisterWithContext} />
                                <AuthorizedRouteWithContext path="/logout" component={LogoutWithContext} />
                                <AuthorizedRouteWithContext path="/create" allowedRoles={['admin']} component={CreateBookWithContext} />
                                {/* <AuthorizedRouteWithContext path="/createOrder" exact component = {CreateOrderWithContext}/> */}
                                <AuthorizedRouteWithContext path="/create" allowedRoles={['admin']} component={CreateBookWithContext} />
                                <Route component={NotFound} />
                            </Switch>
                            <Footer />
                        </UserProvider>
                    </Fragment>
                </Router>


            </div>

        );
    }
}

export default App;
