import type { Props } from '../anchor';

import React from 'react';

import Anchor from '../anchor';

import './style.scss';

const createIndentedAnchor = ( indentClassNum : 1|2|3|4 ) : React.FC<Props> => ({ className, ...props }) => (
  <Anchor className={ `indent${ indentClassNum }${ className ? ` ${ className }` : '' }` } { ...props } />
);

const AnchorIndent1 = createIndentedAnchor( 1 );
const AnchorIndent2 = createIndentedAnchor( 2 );
const AnchorIndent3 = createIndentedAnchor( 3 );
const AnchorIndent4 = createIndentedAnchor( 4 );

const Component : React.FC = () => (
	<nav className="site-nav">
		<Anchor to="/intro">Introduction</Anchor>
		<Anchor className="group-link" to="/getting-started">Getting Started</Anchor>
		<AnchorIndent1 to="/getting-started#instantiate">Creating Instance</AnchorIndent1>
		<AnchorIndent1 to="/getting-started#using">Using the Instance</AnchorIndent1>
		<AnchorIndent1 to="/getting-started#sharing">Sharing the Instance</AnchorIndent1>
		<Anchor className="group-link" to="/api">API</Anchor>
		<AnchorIndent1 to="/api#source">AutoImmutable Instance</AnchorIndent1>
		<AnchorIndent1 to="/api#consumer">Interacting with Instance</AnchorIndent1>
		<AnchorIndent2 to="/api/method/get">Accessing Immutable Data</AnchorIndent2>
		<AnchorIndent3 to="/api/method/get/property-path">Specific Data Items</AnchorIndent3>
		<AnchorIndent2 to="/api/method/set">Updating Immutable Data</AnchorIndent2>
		<AnchorIndent3 to="/api/method/set/overview">Detailed Overview</AnchorIndent3>
		<AnchorIndent3 to="/api/method/set/overview#indexing">Working with Arrays</AnchorIndent3>
		<AnchorIndent3 to="/api/method/set/overview#batched-update">Batched Update</AnchorIndent3>
		<AnchorIndent3 className="group-link" to="/api/method/set/tags">Using Tag Commands</AnchorIndent3>
		<AnchorIndent4 to="/api/method/set/tags/clear-usage"><b>@@CLEAR</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/api/method/set/tags/delete-usage"><b>@@DELETE</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/api/method/set/tags/move-usage"><b>@@MOVE</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/api/method/set/tags/push-usage"><b>@@PUSH</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/api/method/set/tags/replace-usage"><b>@@REPLACE</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/api/method/set/tags/set-usage"><b>@@SET</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/api/method/set/tags/splice-usage"><b>@@SPLICE</b> Usage Example</AnchorIndent4>
		<AnchorIndent4 to="/api/method/set/tags/order-of-operations">Combination Usage Example</AnchorIndent4>
		<AnchorIndent2 to="/api/method/disconnect">Disconnecting from Instance</AnchorIndent2>
		<Anchor className="group-link" to="/history/features">What's Changed?</Anchor>
	</nav>
);

Component.displayName = 'Site.Nav';

export default Component;