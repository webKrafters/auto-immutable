import React from 'react';

import Anchor from '../anchor';

import './style.scss';

const Component : React.FC = () => (
    <nav className="site-faqs">
        <Anchor to="/getting-started">Installation</Anchor>
        <Anchor to="/api/method/set">Is true that the data can never be mutated?</Anchor>
		<Anchor to="/api/method/get/property-path">How do I read my data?</Anchor>
        <Anchor to="/api/method/get/property-path#global">About the <strong><code>@@DLOBAL</code></strong> keyword.</Anchor>
        <Anchor to="/api/method/set/overview#indexing">Can I use negative array indexing?</Anchor>
		<Anchor to="/api/method/set">How to set state.</Anchor>
		<Anchor to="/api/method/set/overview">Why not use the spread operator for incoming state?</Anchor>
		<Anchor to="/api/method/set/overview#indexing">How do I update my array exactly at a specific index?</Anchor>
        <Anchor to="/api/method/set/tags">What is the use of <strong>@@ set tags</strong>?</Anchor>
        <Anchor to="/api/method/set/overview#batched-update">How to run multiple set operations sequentially.</Anchor>
    </nav>
);

export default Component;