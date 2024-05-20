import type { FC } from 'react';

import React from 'react';

import Anchor from '../anchor';

import './style.scss';

const NavMinor : FC = () => (
    <nav className="nav-minor">
        <div><Anchor className="link-0" to="/intro">Welcome</Anchor></div>
        <div><Anchor className="link-1" to="/#relations">Why now?</Anchor></div>
        <div><Anchor className="link-2" to="/quick-start">Quick Start</Anchor></div>
    </nav>
);

export default NavMinor;