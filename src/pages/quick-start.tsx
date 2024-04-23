import type { HeadFC } from 'gatsby';

import React from 'react';

import Anchor from '../partials/anchor';

import StartPage from '../partials/contents/start-page';

const ctaStyle = {
    alignItems: 'center',
    display: 'flex',
    height: '5rem',
    justifyContent: 'flex-end'
};

const QuickStartPage : React.FC = () => (
    <article className="quick-start-page">
        <h1>Quick Start</h1>
        <StartPage />
        <div style={ ctaStyle }>
            <Anchor to="/intro">
                See complete documentation.
            </Anchor>
        </div>
    </article>
);

export default QuickStartPage;

export const Head: HeadFC = () => ( <title>Quick Start</title> );
