import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'

//book = {_id: "5c8ab39f34bd58663cd071cf", title: "ghklklklkl", type: "ghlklklk", description: "ghlklklklklklklklklklk", price: 900, 
const BookCard = ({ title, description, image, _id }) => {
    return (
        <Fragment>
            <div className="card col-4">
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
                        href={`/details/${_id}`}
                    >
                        Details
                    </Link> */}
                    <button type="button" className="btn btn-warning float-right btn-sm">
                        Order
                    </button>
                </div>
            </div>
        </Fragment>
    );

};
export default BookCard;

