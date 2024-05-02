import type { HeadFC } from 'gatsby';

import React from 'react';

import StartPage from "../partials/contents/start-page";

const GettingStartedPage : React.FC<{className : string}> = ({ className }) => (
    <article className={ `getting-started-page ${ className }` }>
        <h1>Getting Started</h1>
        <StartPage />
    </article>
);

export default GettingStartedPage;


export const Head: HeadFC = () => ( <title>Getting Started</title> );
