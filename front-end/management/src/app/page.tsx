"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    const handleLogin = () => {
        setIsLoggedIn(true);
        // Navigate to the dashboard page programmatically
        router.push('/dashboard');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Navigate to the login page programmatically
        router.push('/login');
    };

    const goBack = () => {
        // Navigate back one step in history
        router.back();
    };

    return (
        <div>
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
            <button onClick={goBack}>
                Go Back
            </button>
        </div>
    );
}

export default App;
