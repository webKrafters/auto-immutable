import type { HeadFC } from 'gatsby';

import React from 'react';

import { graphql } from 'gatsby';

export interface HeadDataProp {
    site: {
        siteMetadata: {
            title : string
        }
    }
}

export { default } from '../partials/contents/intro-page';

export const Head: HeadFC<HeadDataProp> = ({ data }) => (
    <>
        <title>Welcome to { data.site.siteMetadata.title }!</title>
        <meta
            content={ `Welcome to ${ data.site.siteMetadata.title }.` }
            name="description"
        />
    </>
);

export const query = graphql`
    query IntroTitle {
        site {
            siteMetadata {
                title
            }
        }
    }
`