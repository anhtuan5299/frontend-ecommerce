import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "./index";

const PrivateRoutes = ({ children }) => {
    let location = useLocation();
    return isAuthenticated() ? (
        children

    ) : (
        <Navigate to="/signin" state={{ from: location }} />
    );
};

export default PrivateRoutes;