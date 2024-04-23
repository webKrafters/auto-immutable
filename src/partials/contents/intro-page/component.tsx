import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Anchor from '../../anchor';
import CodeBlock from '../../code-block';

const IntroPage: React.FC = () => {
	const { site: { siteMetadata: {
		title,
		url: {
			demo: demoUrl,
			npm: npmUrl
		}
	} } } = useStaticQuery(
		graphql`
			query IntroPageVm {
				site {
					siteMetadata {
						title,
						url {
							demo,
							npm
						}
					}
				}
			}
		`
	);
  	return (
		<article className="intro-page">
	  	<h1>Welcome to { title }!</h1>
	  	<p>Framework agnostic automatic immutable writing data-structure for javascript and typescript functional programming. </p>
		<p>
			<label>
				<strong>Official: </strong>
				<Anchor to={ npmUrl }>Auto Immutable JS</Anchor>
			</label>
		</p>
		<p className="installation">
			<h4><u>Installation</u></h4>
			<label>
				<strong>Main:</strong>
				<CodeBlock isInline>
					npm install --save auto-immutable
				</CodeBlock>
			</label>
			<label>
				<strong>Alternate:</strong>
				<CodeBlock isInline>
					npm install --save @webkrafters/auto-immutable
				</CodeBlock>
			</label>
		</p>
		<p>
			<label>
				<strong>Play with a demo app here on: </strong>
				<Anchor to={ demoUrl }>Code Sandbox</Anchor>
			</label>
		</p>
		<div>
			<label>
				<strong>License: </strong>
				<span>MIT</span>
			</label>
		</div>
		<p>
			<h2>Why { title }?</h2>
			Why should <i><strong>you</strong></i> consider { title } for your next project?<br />
			Here are a few reasons:
			<ul>
				<li> Auto-immutable protects data from random mutations. </li>
				<li> It is write-friendly. No need for <code>[].concat([...])</code>, <code>Object.assign(...)</code>, <code>$.extend(...)</code><code>...rest</code>, <code>...spread</code> or any similar operation. See <Anchor to="/api/method/set"><code>immutable.set(...)</code></Anchor>.</li>
				<li> It is read-friendly. Simply call the <code>get(...)</code> with the data object property paths to read. See <Anchor to="/api/method/get"><code>immutable.get(...)</code></Anchor>.</li>
				<li> Recognizes <b>negative array indexing</b>. Please see <Anchor to="/concepts/property-path">Property Path</Anchor> and <code>immutable.set(...)</code> <Anchor to="/api/method/set/array-indexing">Indexing</Anchor>.</li>
			</ul>
		</p>
		<p>
			May see features history at <Anchor to="/history/features">What's Changed?</Anchor>
		</p>
		</article>
	);
};

export default IntroPage;
		
