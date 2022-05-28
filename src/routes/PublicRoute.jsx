import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {

    const {token} = useSelector(state => state.auth);

    if(!token) {
        return children;
    }

    return <Navigate to="/chats"/>

}

export default PublicRoute;