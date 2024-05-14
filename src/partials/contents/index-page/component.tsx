import type { ReactNode } from 'react';

import React from 'react';

import AuditOutlinedIcon from '@ant-design/icons/AuditOutlined';
import ClusterOutlinedIcon from '@ant-design/icons/ClusterOutlined';
import OrderedListOutlinedIcon from '@ant-design/icons/OrderedListOutlined';
import ProductFilledIcon from '@ant-design/icons/ProductFilled';
import QrcodeOutlinedIcon from '@ant-design/icons/QrcodeOutlined';
import RocketFilledIcon from '@ant-design/icons/RocketFilled';

import { StaticImage } from 'gatsby-plugin-image';

import Anchor from '../../anchor';

import './style.scss';

const Tile : React.FC<{
  className? : string,
  icon? : ReactNode,
  title : ReactNode,
  children : ReactNode
}> = ({ className = null, icon = null, title, children }) => (
  <div className={ `tile${ className ? ` ${ className }` : '' }` }>
    <div className="icon-div">{ icon ?? null }</div>
    <h2 className="title-div">{ title }</h2>
    <div>{ children }</div>
  </div>
);
Tile.displayName = 'IndexPage.Tile';

const IndexPage: React.FC<{className : string}> = ({ className }) => (
  <>
    <article className={ `index-page ${ className }` }>
      <div className="hero">
        <StaticImage
          alt="wrier hero"
          className="image"
          src="../../../images/writing.png"
        />
      </div>
      <div className="cta">
        <Anchor to="/quick-start">
          <RocketFilledIcon />
          <span>Quick Start</span>
        </Anchor>
        <Anchor to="/intro">
          <ProductFilledIcon />
          <span>Documentation</span>
        </Anchor>
      </div>
    </article>
    <div id="relations" className="index-page-relations">
      <Tile icon={ <AuditOutlinedIcon /> } title="Structure">
          Auto-Immutable protects values in a running program from random mutations. All attempts to mutate data directly are ignored.
      </Tile>
      <Tile icon={ <ClusterOutlinedIcon /> } title="Simplicity">
          Simple write-friendly APIs. Simply supply the new write value object and it will be merged into the current immutable data. See <Anchor to="/api/method/set"><code>immutable.set(...)</code></Anchor>.
      </Tile>
      <Tile icon={ <QrcodeOutlinedIcon /> } title="Accessibility">
          No matter how shallow or deeply nested your data, read access is straight-forward. Simply call the <code>get(...)</code> with the object paths to the data properties you would like to read. See <Anchor to="/api/method/get"><code>immutable.get(...)</code></Anchor>.
      </Tile>
      <Tile icon={ <OrderedListOutlinedIcon /> } title="Indexing">
        Ability to modify data at the array index level is supported. Recognizes <b>negative array indexing</b>. Please see <Anchor to="/api/method/get/property-path">Property Path</Anchor> and <code>immutable.set(...)</code> <Anchor to="/api/method/set/overview#indexing">Indexing</Anchor>.
      </Tile>
    </div>
  </>
);

export default IndexPage;