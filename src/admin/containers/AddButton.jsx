import React from 'react';
import { Link } from "react-router-dom";

const AddButton = (props) => {
    return (
        <Link to="#" className="btn button bg align-self-end">
            <i className="fa fa-plus" aria-hidden="true"></i>{" Add "+ ( props.type ? props.type : null)}
        </Link>
    )
}

export default AddButton;