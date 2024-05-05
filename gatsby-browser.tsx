import type { GatsbyBrowser } from 'gatsby';

import React, { useContext, useEffect, useLayoutEffect } from 'react';

import metadata, { NO_SIDER_URI_PATTERN } from './gatsby-config/metadata';

import PageProvider, { UpdaterCtx as PageCtxUpdater } from './src/page-context';

import DarkmodeProvider, { ValueCtx as DarkmodeValueCtx } from './src/partials/dark-mode-settings/context';

import Layout from './src/partials/layouts/index';

// // Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }

const PageManager : React.FC<{
    children: React.ReactNode,
    props: {uri : string}
}> = ({ children, props }) => {
    const updatePageCtx = useContext( PageCtxUpdater );
    const darkmode = useContext( DarkmodeValueCtx );
    useLayoutEffect(() => {
        document.querySelector( 'body' )?.classList[
            darkmode ? 'add' : 'remove'
        ]( 'dark' );
    }, [ darkmode ]);
    useEffect(() => updatePageCtx( s => ({
        ...s,
        ...props,
        isNoSiderPage: NO_SIDER_URI_PATTERN.test( props.uri )
    }) ), [ props ]);
    return ( <Layout { ...props }>{ children }</Layout> );
};

export const wrapPageElement : GatsbyBrowser["wrapPageElement"] = ({ element, props }) => (
    <PageManager  props={ props }>
        { element }
    </PageManager>
);

export const wrapRootElement : GatsbyBrowser["wrapRootElement"] = ({ element }) => (
    <PageProvider>
        <DarkmodeProvider initValue={
            window.localStorage?.getItem( metadata.darkmode.key ) !== 'false'
                ? metadata.darkmode.defaultValue
                : false
        }>
            { element }
        </DarkmodeProvider>
    </PageProvider>
);
