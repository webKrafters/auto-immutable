import type { Props } from '../anchor';

import React from 'react';

import Anchor from '../anchor';

import BrowserStatus from './with-status/browser';
import ServerStatus from './with-status/server';

import './style.scss';

const WithStatus = typeof window === 'undefined' ? ServerStatus : BrowserStatus;

const NavLink : React.FC<Props> = props => (
	<WithStatus { ...props }>
		<Anchor { ...props } />
	</WithStatus>
);

const createIndentedNavLink = ( indentClassNum : 1|2|3|4 ) : React.FC<Props> => ({ className, ...props }) => (
	<WithStatus { ...props }>
		<Anchor className={ `indent${ indentClassNum }${ className ? ` ${ className }` : '' }` } { ...props } />
	</WithStatus>
);

const NavLinkIndent1 = createIndentedNavLink( 1 );
const NavLinkIndent2 = createIndentedNavLink( 2 );
const NavLinkIndent3 = createIndentedNavLink( 3 );
const NavLinkIndent4 = createIndentedNavLink( 4 );

const Component : React.FC = () => (
	<nav className="site-nav">
		<NavLink to="/intro">Introduction</NavLink>
		<NavLink className="group-link" to="/getting-started">Getting Started</NavLink>
		<NavLinkIndent1 to="/getting-started#instantiate">Creating Instance</NavLinkIndent1>
		<NavLinkIndent1 to="/getting-started#use">Using the Instance</NavLinkIndent1>
		<NavLinkIndent1 to="/getting-started#share">Sharing the Instance</NavLinkIndent1>
		<NavLink className="group-link" to="/api">API</NavLink>
		<NavLinkIndent1 to="/api#source">AutoImmutable Instance</NavLinkIndent1>
		<NavLinkIndent1 to="/api#consumer">Interacting with Instance</NavLinkIndent1>
		<NavLinkIndent2 to="/api/method/get">Accessing AutoImmutable Data</NavLinkIndent2>
		<NavLinkIndent3 to="/api/method/get/property-path">Specific Data Items</NavLinkIndent3>
		<NavLinkIndent2 to="/api/method/set">Updating AutoImmutable Data</NavLinkIndent2>
		<NavLinkIndent3 to="/api/method/set/overview">Detailed Overview</NavLinkIndent3>
		<NavLinkIndent3 to="/api/method/set/overview#indexing">Working with Arrays</NavLinkIndent3>
		<NavLinkIndent3 to="/api/method/set/overview#batched-update">Batched Update</NavLinkIndent3>
		<NavLinkIndent3 className="group-link" to="/api/method/set/tags">Using Tag Commands</NavLinkIndent3>
		<NavLinkIndent4 to="/api/method/set/tags/clear-usage"><b>@@CLEAR</b> Usage Example</NavLinkIndent4>
		<NavLinkIndent4 to="/api/method/set/tags/delete-usage"><b>@@DELETE</b> Usage Example</NavLinkIndent4>
		<NavLinkIndent4 to="/api/method/set/tags/move-usage"><b>@@MOVE</b> Usage Example</NavLinkIndent4>
		<NavLinkIndent4 to="/api/method/set/tags/push-usage"><b>@@PUSH</b> Usage Example</NavLinkIndent4>
		<NavLinkIndent4 to="/api/method/set/tags/replace-usage"><b>@@REPLACE</b> Usage Example</NavLinkIndent4>
		<NavLinkIndent4 to="/api/method/set/tags/set-usage"><b>@@SET</b> Usage Example</NavLinkIndent4>
		<NavLinkIndent4 to="/api/method/set/tags/splice-usage"><b>@@SPLICE</b> Usage Example</NavLinkIndent4>
		<NavLinkIndent4 to="/api/method/set/tags/order-of-operations">Combination Usage Example</NavLinkIndent4>
		<NavLinkIndent2 to="/api/method/disconnect">Disconnecting from Instance</NavLinkIndent2>
		<NavLink className="group-link" to="/history/features">What's Changed?</NavLink>
	</nav>
);

Component.displayName = 'Site.Nav';

export default Component;