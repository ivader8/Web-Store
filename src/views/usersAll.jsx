import React, {Fragment} from 'react'
import { Redirect } from 'react-router-dom'

import { Button } from 'react-bootstrap'
import { UserConsumer } from '../components/contexts/user-context';
import { post } from '../data/crud';
import UserService from '../services/user-service';
import Loading from '../loading';
import UserCard from '../components/user-card';



class UsersAll extends React.Component {
    state = {
        users: [],
        isLoading:false
    }
    
    static service = new UserService();

    render(){

        const {users, isLoading} = this.state;

        if (isLoading) {
            return <Loading />;
        }

        return(
            <Fragment>
                <h2 align="center">Users:</h2>
                <br/>
                <div className="row">
                    <div className="card-deck space-top">
                        {
                            users.map(user => (
                                <UserCard key={user.id}{...user} />
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        );
    }

    async componentDidMount(){
        try {
            const users = await UsersAll.service.getAllUsers();
        
            this.setState({users});
         } catch (error) {
            console.error(error)
        } 
     }


}

export default UsersAll;