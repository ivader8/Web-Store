import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({ username, email, _id }) => {
    return (
        <Fragment>
            <div align="center" className="card-col-4" min-width="350px">

                <div className="card-body">
                    <h5 className="card-title">{username}</h5>
                    <p className="card-text">
                        {email}</p>
                </div>

                {/* TODO work on hte delete functionality */}

                <Link
                    type="button"
                    className="btn btn-primary float-right btn-sm"
                    to={`/${_id}`}
                >
                    Delete
                    </Link>

            </div>

        </Fragment>
    );

};
export default UserCard;

