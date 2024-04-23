import React from 'react';

import StartPage from "../start-page";

const GettingStartedPage : React.FC<{className : string}> = ({ className }) => (
    <article className={ `getting-started-page ${ className }` }>
        <h1>Getting Started</h1>
        <StartPage />
    </article>
);

export default GettingStartedPage;