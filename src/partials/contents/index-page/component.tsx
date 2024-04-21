import type { HeadFC, PageProps } from 'gatsby';

import React from 'react';

import { Button } from 'antd';

import ProductFilledIcon from '@ant-design/icons/ProductFilled';
import RocketFilledIcon from '@ant-design/icons/RocketFilled';

import { StaticImage } from 'gatsby-plugin-image';

import Anchor from '../../../partials/anchor';

import './style.scss';

const IndexPage: React.FC<PageProps> = () => (
  <article className="index-page">
    <div className="hero">
      <StaticImage
        alt="wrier hero"
        className="image"
        src="../../../images/writing.png"
      />
    </div>
    <div className="cta">
      <Anchor to="/getting-started">
        <Button>
          <RocketFilledIcon />
          <span>Quick Start</span>
        </Button>
      </Anchor>
      <Anchor to="/intro">
        <Button>
          <ProductFilledIcon />
          <span>Documentation</span>
        </Button>
      </Anchor>
    </div>
  </article>
);

export default IndexPage;