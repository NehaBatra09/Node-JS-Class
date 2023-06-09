import React, { Suspense, useEffect, useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { User } from './components/Class-2-31/ParentToChild-1';

export default function App() {



    return (<>
        <Router>

            <Routes>

                <Route element={User} path='/user' />

            </Routes>
        </Router>

    </>)

}
