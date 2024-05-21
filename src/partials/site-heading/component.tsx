import React, { useContext, useLayoutEffect } from 'react';

import CloseOutlinedIcon from '@ant-design/icons/CloseOutlined';
import MenuOutlinedIcon from '@ant-design/icons/MenuOutlined';

import { graphql, useStaticQuery } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import Anchor from '../anchor';
import NavMinor from '../nav-minor';
import ToggleSwitch from '../toggle-switch';

import AuxSiderToggleable from '../toggle-switch/container/aux-sider';

import { ValueCtx } from '../../page-context';

import DarkModeSetting from '../dark-mode-settings';

import SiteTags from '../site-tags';

import './style.scss';

interface Props {  
  isAuxCollapsed?: boolean;
  isSiderCollapsed?: boolean;
  onToggleAux?: VoidFunction;
  onToggleSider?: VoidFunction;
};

const SiderToggleable : React.FC<Props> = props => (
  <ToggleSwitch
    className="sider-toggle-btn"
    isOn={ !props.isSiderCollapsed }
    OffIconType={ CloseOutlinedIcon }
    OnIconType={ MenuOutlinedIcon }
    onToggle={ props.onToggleSider }
  />
);

const Component : React.FC<Props> = props => { 
  const { site: { siteMetadata: { title } } } = useStaticQuery(
    graphql`
        query HeaderVm{
            site {
                siteMetadata {
                    title
                }
            }
        }
    `
  );
  const { isNoSiderPage } = useContext( ValueCtx );
  useLayoutEffect(() => {
    props.isAuxCollapsed === false &&
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: 0
    });
  }, [ props.isAuxCollapsed ]);
  return (
    <header className="site-heading">
      { !isNoSiderPage && ( <SiderToggleable { ...props } /> ) }
      <div className="branding">
        <span className="pkg-title" >
          <Anchor hideIcon to="/">
            { title }
          </Anchor>
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
        <NavMinor />
        <DarkModeSetting />
        <AuxSiderToggleable
          isOn={ !props.isAuxCollapsed }
          onToggle={ props.onToggleAux }
        />
      </div>
    </header>
  );
};

Component.displayName = 'Site.Heading';

export default Component;