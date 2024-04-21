import type { GatsbyBrowser } from 'gatsby';

import React, { useContext } from 'react';

import { NO_SIDER_URI_PATTERN } from './gatsby-config/metadata';

import PageProvider, { UpdaterCtx } from './src/page-context';

import DarkmodeProvider from './src/partials/dark-mode-settings/context';

import Layout from './src/partials/layouts/index';

// // Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }

export const wrapPageElement : GatsbyBrowser["wrapPageElement"] = ({ element, props }) => {
    useContext( UpdaterCtx )( s => ({
        ...s,
        ...props,
        isNoSiderPage: NO_SIDER_URI_PATTERN.test( props.uri )
    }) );
    return ( <Layout { ...props }>{ element }</Layout> );
};

export const wrapRootElement : GatsbyBrowser["wrapRootElement"] = ({ element }) => (
    <PageProvider>
        <DarkmodeProvider>
            { element }
        </DarkmodeProvider>
    </PageProvider>
);
