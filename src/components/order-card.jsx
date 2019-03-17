import React, { Fragment } from 'react'
// import { Redirect } from 'react-router-dom'
// import { Button } from 'react-bootstrap'
import { UserConsumer } from './contexts/user-context';
// import { post } from '../data/crud'
// import SuccessOrderMessage from '../views/success-order-message';

const OrderCard = ({ title, username, date, _id }) => {


    return (
        <Fragment>
            <form >
                <div className="card-col-4" min-width="150px">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                           Username: {username}
                        </p>
                        <p className="card-text">
                           Date: {date}
                        </p>
                        
                    </div>
                </div>
            </form>

        </Fragment>
    );

};
export { OrderCard };




