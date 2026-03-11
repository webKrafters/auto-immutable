import React from 'react';

import Alert from '../../../../partials/alert';
import Anchor from '../../../../partials/anchor';
import CodeBlock from '../../../../partials/code-block';
import Name from '../../../../partials/name';
import Paragraph from '../../../../partials/paragraph';

const GET_SAMPLE =
`import AutoImmutable from 'auto-immutable';

const aImmutable = new AutoImmutable({
    a: {
        b: 5,
        c: [ 6, {
            d: 7,
            e: 8,
            f: 9
        } ]
    }
});

const consumer = aImmutable.connect();

consumer.get( 'a.c[1]', 'b' );
// returns:
// {
//     'a.c[1]': {
//         d: 7,
//         e: 8,
//         f: 9
//     },
//     b: 5
// }`;

const GetMethodApiPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `get-method-api-page ${ className }` }>
        <h1>Accessing <Name /> Data</h1>
        <Paragraph>Any <Name /> instance communicates with its environment through its own <Anchor to="/api#consumer"><code>Connection class</code></Anchor> (the consumer) instances.</Paragraph>
        <Paragraph>The <code>get(...)</code> method of the <code>Connection</code> instance provides the means of accessing and obtaining Immutable data.</Paragraph>
        <Paragraph>This method is variadic accepting only <strong><Anchor to="/api/method/get/property-path">property path</Anchor> argument(s)</strong>.</Paragraph>
        <Alert title="Pro tip:">
            <Paragraph>The data returned from this method is a snapshot of the <Name /> instance data at the time of access.</Paragraph>
            <Paragraph>This snapshot data is not affected by further updates to the <Name /> instance data.</Paragraph>
            <Paragraph>Any further alterations to the snapshot data do not reach the <Name /> instance.</Paragraph>
        </Alert>
        <div>
            <h4 id="get-method-example">Example:</h4>
            <CodeBlock>{ GET_SAMPLE }</CodeBlock>
        </div>
    </article>
);

export default GetMethodApiPage;
