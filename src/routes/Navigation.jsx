import React from "react";
import Home from '../pages/Home';
import { Routes, Route } from "react-router-dom";

export default function Navigation() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}