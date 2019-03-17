import React, {Fragment} from 'react'
import { Redirect } from 'react-router-dom'

import { Button } from 'react-bootstrap'
import { UserConsumer } from '../components/contexts/user-context';
import { post } from '../data/crud';



class Register extends React.Component {
    state = {
        email: '',
        username: '',
        password: '',
        error: ''
        
    }


    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, username, password } = this.state;

        const credentials = { email, username, password }

        this.setState({
            error: ''
        },
            async () => {
                try {
                    
                    const result = await post('http://localhost:5000/auth/signup', credentials)

                    if (!result.success) {
                        const errors = Object.values(result.errors).join(' ');

                        throw new Error(errors);
                    }

                    const loggingResult = await post('http://localhost:5000/auth/login', credentials);

                    window.localStorage.setItem('auth_token', loggingResult.token)
                    window.localStorage.setItem('user', JSON.stringify({
                        ...loggingResult.user,
                        isLoggedIn: true,
                    }))    
                    this.setState({isLoggedIn:true})                      

                } catch (error) {
                    this.setState({
                        error: error.message,
                    })
                }
            }
        )

    }

    // componentWillUnmount() {
    //     if (isLoggedIn){

    //     }
    //    }

    render() {

        const { email, username, password, error } = this.state;

        let {isLoggedIn}=this.state;
        
        
        if (isLoggedIn) {
            return (
                <Redirect to="/" />
            );
        }        

        return (

           <Fragment>
                <div className="form-wrapper">
                {
                    error.length
                        ? <div>Something went wrong: {error}</div>
                        : null
                }
                {
                    isLoggedIn
                    ? <div> You are already logged in! </div>:null
                }
                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="text"
                            name="email"
                            id="email"
                            placeholder="Enter e-mail"
                            value={email}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="username"
                            name="username"
                            id="username"
                            placeholder="Enter username"
                            value={username}
                            onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={this.handleChange} />
                    </div>
                    <Button size="lg" type="submit" variant="outline-primary">
                        Register
                        </Button>
                </form>
            </div>
           </Fragment>
        )
    }

}

const RegisterWithContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn, updateUser }) => (

                    <Register
                        {...props}
                        isLoggedIn={isLoggedIn}
                        updateUser={updateUser}
                    />
                )
            }
        </UserConsumer>
    )
}

export default RegisterWithContext;