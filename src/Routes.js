import React from "react";
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from "./core/Home";

import PrivateRoutes from "./auth/helper/PrivateRoutes";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import UserDashboard from "./user/UserDashboard";
import Cart from "./core/Cart";



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/signup' element={< Signup />}></Route>
                <Route exact path='/signin' element={< Signin />}></Route>
                <Route exact path='/cart' element={< Cart />}></Route>
                <Route exact path='/user/dashboard' element={
                    <PrivateRoutes>
                        < UserDashboard />
                    </PrivateRoutes>
                }></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
