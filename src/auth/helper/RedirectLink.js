import React from "react";
import { Navigate } from "react-router-dom";

const RedirectLink = ( {previousPath, isRedirect} ) => {
    return (
        <Navigate to={previousPath}/>
    );
};

export default RedirectLink;