import type { PageProps } from '../../../page-context';

import React from 'react';

import Anchor from '../../anchor';

import './style.scss';
const TRow : React.FC<{children: React.ReactNode}> = ({ children }) => ( <tr className="vertical-top">{ children }</tr> );
TRow.displayName = 'eaturesHistory.TRow';

const TCol : React.FC<{children: React.ReactNode}> = ({ children }) => ( <td className="top-barred">{ children }</td> );

const FeaturesHistoryPage : React.FC<PageProps> = ({ className }) => (
    <article className={ `features-history-page ${ className }` }>
        <h1 id="changes">What's Changed?</h1>
        <table>
            <thead><TRow><th>v0.0.1</th></TRow></thead>
            <tbody>
                <TRow><TCol><b>1.</b></TCol><TCol>Closable <Anchor to="/api#source"><code>AutoImmutable class</code></Anchor></TCol></TRow>
                <TRow><td><b>2.</b></td><td><Anchor to="/api#consumer"><code>Reusability</code></Anchor></td></TRow>
                <TRow><td><b>3.</b></td><td>Developer controlled <Anchor to="/api/method/disconnect"><code>Memory Management</code></Anchor></td></TRow>
                <TRow><td><b>4.</b></td><td><Anchor to="/api/method/set/overview#batched-update"><code>Batched updates</code></Anchor></td></TRow>
                <TRow><td><b>5.</b></td><td>Special array handling: <Anchor to="/api/method/set/overview#indexing"><code>Indexing</code></Anchor></td></TRow>
                <TRow>
                    <td><b>6.</b></td>
                    <td>
                        Update <Anchor to="/api/method/set/tags"><code>Tags</code></Anchor> commands:{ ' ' }
                        <Anchor to="/api/method/set/tags/clear-usage">@@CLEAR</Anchor>{ ', ' }
                        <Anchor to="/api/method/set/tags/delete-usage">@@DELETE</Anchor>{ ', ' }
                        <Anchor to="/api/method/set/tags/move-usage">@@MOVE</Anchor>{ ', ' }
                        <Anchor to="/api/method/set/tags/push-usage">@@PUSH</Anchor>{ ', ' }
                        <Anchor to="/api/method/set/tags/replace-usage">@@REPLACE</Anchor>{ ', ' }
                        <Anchor to="/api/method/set/tags/set-usage">@@SET</Anchor>{ ' and ' }
                        <Anchor to="/api/method/set/tags/splice-usage">@@SPLICE</Anchor>{ '.' }
                    </td>
                </TRow>
            </tbody>
        </table>
    </article>
);

export default FeaturesHistoryPage;