import type { GatsbySSR } from 'gatsby';

import React, { useContext, useEffect } from 'react';

import metadata, { NO_SIDER_URI_PATTERN } from './gatsby-config/metadata';

import PageProvider, { UpdaterCtx } from './src/page-context';

import DarkmodeProvider from './src/partials/dark-mode-settings/context';

import Layout from './src/partials/layouts/index/index';

const PageManager : React.FC<{
    children : React.ReactNode,
    props : {uri : string}
}> = ({ children, props }) => {
    const update = useContext( UpdaterCtx );
    useEffect(() => update( s => ({
        ...s,
        ...props,
        isNoSiderPage: NO_SIDER_URI_PATTERN.test( props.uri )
    }) ), [ props ]);
    return ( <Layout { ...props }>{ children }</Layout> );
};

export const wrapPageElement : GatsbySSR["wrapPageElement"] = ({ element, props }) => (
    <PageManager props={ props }>
        { element }
    </PageManager>
);

export const wrapRootElement : GatsbySSR["wrapRootElement"] = ({ element }) => (
    <PageProvider>
        <DarkmodeProvider>
            { element }
        </DarkmodeProvider>
    </PageProvider>
);

export const onRenderBody : GatsbySSR["onRenderBody"] = ({
    setBodyAttributes, setHeadComponents
}) => {
    const { device: { themeColor } } = metadata;
    metadata.darkmode.defaultValue && 
    setBodyAttributes({ className: 'dark' });
    setHeadComponents([
        <link key="mask-icon" rel="mask-icon" href="/safari-pinned-tab.svg" color={ themeColor } />,
        <meta key="msapp-tile" name="msapplication-TileColor" content={ themeColor } />,
    ]);
};

