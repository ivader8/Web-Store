import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import CreateService from '../services/createService';
import { UserConsumer } from '../components/contexts/user-context';
import { post } from '../data/crud';


class CreateOrder extends Component {
    static createService = new CreateService();

    constructor(props) {
        super(props)

        this.user = window.localStorage.getItem('user');
        
    }
    state = {
        username: this.user.username,
        title: '',
        error: ''
    }

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, type, description, image, price } = this.state;

        const credentials = {
            title,
            type,
            description,
            price,
            image,

        }

        this.setState({
            error: ''
        },
            async () => {
                try {
                    const result = await post('http://localhost:5000/book/create', credentials)

                    if (!result.success) {
                        const errors = Object.values(result.errors).join(' ');

                        throw new Error(errors);
                    }
                    
                    this.setState({
                        title: '',
                        type: '',
                        description: '',
                        image: '',
                        price: '',
                    })

                } catch (error) {
                    this.setState({
                        error: error.message,
                    })
                }
            }
        )
    }

    render() {
        const { title, type, description, image, price, error } = this.state;

        return{}
    }

}

const CreateOrderWithContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn }) => (

                    <CreateOrder
                        {...props}
                        isLoggedIn={isLoggedIn}

                    />
                )
            }
        </UserConsumer>
    )
}

export default CreateOrderWithContext;