import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from "./pages/notFound";
import Landing from "./pages/landing";
import Home from "./pages/home/home";
import Register from "./pages/register/register";
import Forgot from "./pages/forgotPassword/forgotPassword";

const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path='/'
                    element={
                        <Landing />
                    }
                    errorElement={<NotFound />}
                />
                <Route
                    path="/Home"
                    element={
                        <Home />
                    }
                    errorElement={<NotFound />}
                >
                </Route>
                <Route
                    path="/register"
                    element={
                        <Register />
                    }
                    errorElement={<NotFound />}
                >
                </Route>
                <Route
                    path="/forgotpassword"
                    element={
                        <Forgot />
                    }
                    errorElement={<NotFound />}
                >
                </Route>
                <Route
                    path="*"
                    element={
                        <NotFound />
                    }
                />
            </Routes>
        </Router>
    )
}

export default Routers;