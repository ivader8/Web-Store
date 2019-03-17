import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { UserConsumer } from './contexts/user-context';
import {post} from '../data/crud'
import SuccessOrderMessage from '../views/success-order-message';

const BookCard = ({ title, description, image, _id }) => {
    // let user = window.localStorage.getItem('user') || null

    const userFromStorage = window.localStorage.getItem('user')
    const user = userFromStorage ? JSON.parse(userFromStorage) : {};
    const username = user[Object.keys(user)[0]];
    

    let credentials = {
        username,
        title:{title}[Object.keys({title})[0]]
        
    }

    const handleSubmit = async (event) => {

        event.preventDefault();

        try {
            await post('http://localhost:5000/orders/submit', credentials)
        // console.log(credentials)
           
        // render() (
            return <Redirect to="/successfullyPlacedOrder" />
        
        // return <Redirect to ="/successfullyPlacedOrder" component={}/>

        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className="card-col-4" min-width="150px">
                    <img className="card-img-top card-image"
                        src={image}
                        alt="What the Wind Knows " />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {description}</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"></small>

                        {/* <Link
                            type="button"
                            className="btn btn-primary float-right btn-sm"
                            to={`/${_id}`}
                        >
                            Delete
                    </Link> */}


                        {/* <Link to="/createOrder"> */}
                        <button type="submit" className="btn btn-warning float-right btn-sm">
                            Order
                            </button>
                        {/* </Link> */}

                    </div>
                </div>
            </form>

        </Fragment>
    );

};
export { BookCard };

const BookCardWithContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ username }) => (
                    <BookCard {...props} username={username} />
                )
            }
        </UserConsumer>
    )
}

export default BookCardWithContext;

