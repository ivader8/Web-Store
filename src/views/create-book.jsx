import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import CreateService from '../services/createService';
import { UserConsumer } from '../components/contexts/user-context';
import { post } from '../data/crud';


class CreateBook extends Component {
    static createService = new CreateService();

    state = {
        title: '',
        type: '',
        description: '',
        image: '',
        price: '',
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

        return (
            <main>
                <div class="form-wrapper">
                    {
                        error.length
                            ? <div>Something went wrong: {error}</div>
                            : null
                    }
                    <h1>Create New Product</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" name="title" id="title"
                                placeholder="Enter product title" value={title} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="type">Type</label>
                            <input type="text" name="type" id="type"
                                placeholder="Enter type of the product" value={type} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input type="text" name="description"
                                id="description" placeholder="Enter product description" value={description} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="image">Image URL</label>
                            <input type="text" name="image" id="image"
                                placeholder="Enter product image URL" value={image} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" name="price" id="price"
                                placeholder="Enter product price" value={price} onChange={this.handleChange} />
                        </div>
                        <input type="submit" value="Create" />
                    </form>
                </div>
            </main>
        )
    }

}

const CreateBookWithContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn }) => (

                    <CreateBook
                        {...props}
                        isLoggedIn={isLoggedIn}

                    />
                )
            }
        </UserConsumer>
    )
}

export default CreateBookWithContext;