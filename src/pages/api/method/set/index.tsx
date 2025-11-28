import type { PageProps } from '../../../../page-context';

import React from 'react';

import Anchor from '../../../../partials/anchor';
import CodeBlock from '../../../../partials/code-block';
import Paragraph from '../../../../partials/paragraph';

const SAMPLE =
`import AutoImmutable from 'auto-immutable';

const aImmutable = new AutoImmutable({
    a: {
        b: 5,
        c: [
            6,
            {
                d: 7,
                e: 8,
                f: 9
            }
        ]
    }
});

const consumer = aImmutable.connect();

consumer.set({
    p: 'some test data',
    a: {
        p: {
            t: true
        },
        c: {
            1: {
                e: 720
            }
            3: /\w+/
        }
    }
});
// updates the AutoImmutable instance data to:
// {
//     a: {
//         b: 5,
//         c: [
//             6,
//             {
//                 d: 7,
//                 e: 720,
//                 f: 9
//             },
//             undefined,
//             /\w+/
//         ],
//         p: {
//             t: true
//         }
//     },
//     p: 'some test data'
}`;

const SetMethodApiPage : React.FC<PageProps & {className: string}> = ({ className, location }) => (
    <article className={ `set-method-api-page ${ className }` }>
        <h1>Updating AutoImmutable Data</h1>
        <Paragraph>Any AutoImmutable instance communicates with its environment through its own <Anchor to="/api#consumer"><code>Connection class</code></Anchor> (the consumer) instances.</Paragraph>
        <Paragraph>The <code>set(...)</code> method of the <code>Connection</code> instance provides the means of updating AutoImmutable data.</Paragraph>
        <Paragraph>Any attempt to update through any other means is a noop.</Paragraph>
        <Paragraph>
            This <code>set(...)</code> method accepts <strong>2</strong> arguments - namely:
            <ol>
                <li><strong><code>changes</code>:</strong> a single object payload or an array of object payloads containing data nodes to add and/or merge into the AutoImmutable instance data along with operations to perform at specific existing data nodes.</li>
                <li><strong><code>onComplete</code>:</strong> an optional callback function to be called at the completion of the update operation. This callback is invoked with Two readonly parameters comprising { '(' }1{ ')' } aggregate applied <code>changes</code> object and { '(' }2{ ')' } an array of <code>paths</code> changed, in a tokenized form, respectively will be provided.</li>
            </ol>
            It will create new property pathways into the AutoImmutable instance data for new properties found in <code>changes</code> payload object.
        </Paragraph>
        <div>
            <h4 id="get-method-example">Example:</h4>
            <CodeBlock>{ SAMPLE }</CodeBlock>
        </div>
        <h2 style={{ marginTop: '2rem' }}>
            More on the `<code>changes</code>` Argument Payload
        </h2>
        <Paragraph>
            <label>
                Creating, Updating & Deleting AutoImmutable data Properties:
                <br />
                <strong>
                    <Anchor to="/api/method/set/overview">
                        { location?.origin }/api/method/set/overview
                    </Anchor>
                </strong>
            </label>
        </Paragraph>
        <Paragraph>
            <label>
                Updating AutoImmutable Arrays:
                <br />
                <strong>
                    <Anchor to="/api/method/set/overview#indexing">
                        { location?.origin }/api/method/set/overview#indexing
                    </Anchor>
                </strong>
            </label>
        </Paragraph>
        <Paragraph>
            <label>
                Finer Control with Tags:
                <br />
                <strong>
                    <Anchor to="/api/method/set/tags">
                        { location?.origin }/api/method/set/tags
                    </Anchor>
                </strong>
            </label>
        </Paragraph>
    </article>
);

export default SetMethodApiPage;
