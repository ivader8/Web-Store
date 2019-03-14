import React, { Component } from 'react'
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
        post('http://localhost:5000/book/create', credentials)

        // this.setState(
        //     CreateService.create(credentials)

        //     // {
        //     //     error: '',
        //     // }, () => {
        //     //     try {
        //     //         CreateService.create(credentials)

        //     //     } catch (error) {
        //     //         this.setState({
        //     //             error: error.message,
        //     //         })
        //     //     }
        //     // }
        // )

    }

    render() {
        const { title, type, description, image, price } = this.state;

        return (
            <main>
                <div class="form-wrapper">
                    <h1>Create New Product</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" name="title" id="title"
                                placeholder="Enter book title" value={title} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="type">Type</label>
                            <input type="text" name="type" id="type"
                                placeholder="Enter type of the product" value={type} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <input type="text" name="description"
                                id="description" placeholder="Enter book description" value={description} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="image">Image URL</label>
                            <input type="text" name="image" id="image"
                                placeholder="Enter book image URL" value={image} onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                            <label for="price">Price</label>
                            <input type="number" name="price" id="price"
                                placeholder="Enter book price" value={price} onChange={this.handleChange} />
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
                ({ isLoggedIn, updateUser }) => (

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