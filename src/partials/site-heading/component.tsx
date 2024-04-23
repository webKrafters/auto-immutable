import React, { useContext, useMemo } from 'react';

import { Button } from 'antd';

import CloseOutlinedIcon from '@ant-design/icons/CloseOutlined';
import MenuOutlinedIcon from '@ant-design/icons/MenuOutlined';

import { graphql, useStaticQuery } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import Anchor from '../anchor';

import { ValueCtx } from '../../page-context';

import DarkModeSetting from '../dark-mode-settings';

import SiteTags from '../site-tags';

import './style.scss';

interface Props {  
  isSiderCollapsed?: boolean,
  onToggleSider?: VoidFunction
};

const SiderToggleable : React.FC<Props> = ({ isSiderCollapsed, onToggleSider }) => {
  const siderSwitchProps = useMemo(() => {
    const props: {
      className: string,
      icon: React.ReactNode,
      onClick?: Props[ "onToggleSider" ]
    } = {
      className: 'sider-toggle-btn',
      icon: isSiderCollapsed ? ( <MenuOutlinedIcon /> ) : ( <CloseOutlinedIcon /> )
    };
    if( onToggleSider ) { props.onClick = onToggleSider }
    return props;
  }, [ isSiderCollapsed, onToggleSider ]);
  return ( <Button { ...siderSwitchProps } /> );
};

const Component : React.FC<Props> = props => { 
  const { site: { siteMetadata: {
    title,
    url: {
      repo: repoUrl
    }
  } } } = useStaticQuery(
    graphql`
        query HeaderVm{
            site {
                siteMetadata {
                    title,
                    url {
                        repo
                    }
                }
            }
        }
    `
  );
  
  
  return (
    <header className="site-heading">
      { !useContext( ValueCtx ).isNoSiderPage && (
        <SiderToggleable { ...props } />
      ) }
      <div className="branding">
        <span className="pkg-title" >
          <Anchor hideIcon to={ repoUrl }>{ title }</Anchor>
        </span>
        <Anchor className="logo-link" to="/">
          <StaticImage
            alt="Logo"
            className="logo"
            src="../../images/logo.png"
          />
        </Anchor>
      </div>
      <div>
        <SiteTags />
        <Anchor to="/intro">Welcome</Anchor>
        <Anchor to="/#relations">Why now?</Anchor>
        <Anchor to="/quick-start">Quick Start</Anchor>
        <DarkModeSetting />
      </div>
    </header>
  );
};

Component.displayName = 'Site.Heading';

export default Component;