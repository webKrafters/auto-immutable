import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Anchor from '../../anchor';
import CodeBlock from '../../code-block';
import ListItem from '../../list-item';
import Paragraph from '../../paragraph';

import './style.scss';

const IntroPage: React.FC<{ className: string }> = ({ className }) => {
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
		<article className={ `intro-page ${ className }` }>
			<h1>Welcome to { title }!</h1>
			<Paragraph>
				Framework agnostic automatic immutable writing data-structure for javascript and typescript functional programming.
			</Paragraph>
			<Paragraph>
				<label>
					<strong>Official: </strong>
					<Anchor to={ npmUrl }>Auto Immutable JS</Anchor>
				</label>
			</Paragraph>
			<Paragraph className="installation">
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
			</Paragraph>
			<Paragraph>
				<label>
					<strong>Play with a demo app here on: </strong>
					<Anchor to={ demoUrl }>Code Sandbox</Anchor>
				</label>
			</Paragraph>
			<Paragraph>
				<label>
					<strong>License: </strong>
					<span>MIT</span>
				</label>
			</Paragraph>
			<Paragraph>
				<h2>Why { title }?</h2>
				Why should <i><strong>you</strong></i> consider { title } for your next project?<br />
				Here are a few reasons:
				<ListItem><div>Auto-immutable protects data from random mutations. </div></ListItem>
				<ListItem><div>It is write-friendly. No need for <code>[].concat([...])</code>, <code>Object.assign(...)</code>, <code>$.extend(...)</code><code>...rest</code>, <code>...spread</code> or any similar operation. See <Anchor to="/api/method/set"><code>immutable.set(...)</code></Anchor>.</div></ListItem>
				<ListItem><div>It is read-friendly. Simply call the <code>get(...)</code> method with the data object property paths to read. See <Anchor to="/api/method/get"><code>immutable.get(...)</code></Anchor>.</div></ListItem>
				<ListItem><div>Recognizes <b>negative array indexing</b>. Please see <Anchor to="/api/method/get/property-path">Property Path</Anchor> and <code>immutable.set(...)</code> <Anchor to="/api/method/set/overview#indexing">Indexing</Anchor>.</div></ListItem>
			</Paragraph>
			<Paragraph>
				May see features history at <Anchor to="/history/features">What's Changed?</Anchor>
			</Paragraph>
		</article>
	);
};

export default IntroPage;
		
