import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from "./pages/notFound";
import Landing from "./pages/landing";
import Home from "./pages/home/home";

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