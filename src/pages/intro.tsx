import type { HeadFC } from 'gatsby';

import React from 'react';

import metadata from '../../gatsby-config/metadata';

export { default } from '../partials/contents/intro-page';

export const Head : HeadFC = () => (
    <>
        <title>Welcome to { metadata.title }!</title>
        <meta
            content={ `Welcome to ${ metadata.title }.` }
            name="description"
        />
    </>
);