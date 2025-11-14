import React from "react";
import Sidebar from '../components/Sidebar.jsx'
import Navbar from "../components/Navbar.jsx";
import Navigation from "../routes/Navigation.jsx"


export default function Home() {
    return (
        <div className="flex dark bg-background">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Navbar />

                <main className="p-4">
                    <Navigation />
                </main>
            </div>
        </div>
    )
}