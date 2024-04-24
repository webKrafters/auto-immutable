import React from 'react';

import Anchor from '../../partials/anchor';

import CodeBlock from '../../partials/code-block';

const INSTANCE_SAMPLE =
`import AutoImmutable from 'auto-immutable';

const ProtectedData : {} = {};

const aImmutable = new AutoImmutable( ProtectedData ); // creates an AutoImmutable instance bearing the ProtectedData

aImmutable.connect(); // returns a consumer for this Immutable instance`;

const CONNECTION_SAMPLE =
`import AutoImmutable from 'auto-immutable';

const aImmutable = new AutoImmutable({
    a: {
        b: {
            c: 22
            d: 60
         },
         x: 99
    }
});

const consumer = aImmutable.connect(); // returns a consumer for this AutoImmutable instance

consumer.get( 'a.b.d', 'a.x' );
// returns {
//    'a.b.d': 60,
//    'a.x': 99
// }

consumer.set({
    a: {
        b: {
            d: {
                m: 70
            },
            g: 506
        }
    }
});
// updates immutable data to:
// {
//     a: {
//         b: {
//             c: 22
//             d: {
//                 m: 70
//             }
//             g: 506
//         },
//         x: 99
//     }
// }

consumer.get( 'a.b.d', 'a.x' );
// returns {
//    'a.b.d': { m: 70 },
//    'a.x': 99
// }

console.log( consumer.instanceId ); // prints this consumer's unique id

console.log( consumer.disconnected ); // prints \`false\`

consumer.disconnect(); // severs connection to the AutoImmutable instance.

console.log( consumer.disconnected ); // prints \`true\`

consumer.get( 'a.b.d', 'a.x' ); // returns \`undefined\`

consumer.set({ a: { x: 1000 } }); // cannot update the immutable data

/* ----------------------------------------------------- */

const consumer1 = aImmutable.connect();

consumer1.get( 'a.b.d', 'a.x' );
// returns {
//    'a.b.d': { m: 70 },
//    'a.x': 99
// }

console.log( consumer.disconnected ); // prints \`false\``;

const ApiPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `api-page ${ className }` }>
        <h1>API</h1>
        <div id="source">
            <h3>AutoImmutable Instance</h3>
            <ul>
                <li>is a source object holding the immutable data.</li>
                <li>provides access to the underlying data through its <code>connect(...)</code> method.</li>
            </ul>
            <CodeBlock>{ INSTANCE_SAMPLE }</CodeBlock>
        </div>
        <div id="consumer">
            <h3>Connection Instance</h3>
            <ul>
                <li>is a consumer for an <code>AutoImmutable</code> instance.</li>
                <li>exposes <Anchor to="/api/method/get"><code>get(...)</code></Anchor>, <Anchor to="/api/method/set"><code>set(...)</code></Anchor> and <Anchor to="/api/method/disconnect"><code>disconnect(...)</code></Anchor> methods for interaction with its AutoImmutable instance.</li>
            </ul>
            <CodeBlock>{ CONNECTION_SAMPLE }</CodeBlock>
        </div>
    </article>
);

export default ApiPage;