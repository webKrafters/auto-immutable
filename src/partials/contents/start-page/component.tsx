import React from 'react';

import CodeBlock from '../../code-block';

import './style.scss';

const INSTANTIATE_SAMPLE =
`import { Immutable } from 'auto-immutable';

export interface SampleValue {
    property?: {
        value: number;
    }
};

const initValue : SampleValue = {}; // any object really!

export const sample = new Immutable( initValue );`;

const SHARING_SAMPLE =
`import { sample } from 'sample-instance';

const data = sample.connect();

console.log( data.get( 'property.value' ) ); // logs: 44

data.set({
    property: {
        value: 127
    }
});

console.log( data.get( 'property.value' ) ); // logs: 127

data.disconnect(); // severs access to the sample immutable instance`;

const USING_SAMPLE =
`import { sample } from 'sample-instance';

const data = sample.connect();

console.log( data.get( 'property.value' ) ); // logs: undefined

data.set({
    property: {
        value: 44
    }
});

console.log( data.get( 'property.value' ) ); // logs: 44

data.disconnect(); // severs access to the sample immutable instance`;

const Header : React.FC<{
    children: React.ReactNode,
    id?: string
}> = ({ children, ...props }) => (
    <header { ...props }>
        { children }
    </header>
);

Header.displayName = 'StartPage.Header';

const StartPage : React.FC<{className? : string}> = ({ className }) => (
    <article className={ `start-page${ className ? ` ${ className }` : '' }` }>
        <div className="snippet-intro">
            Begin by installing <strong>Auto Immutable</strong>.
        </div>
        <div className="snippet-box">
            <CodeBlock isInline>
                npm install --save auto-immutable
            </CodeBlock>
        </div>
        <div className="snippet-intro" id="instantiate">
            <h3>Creating an Auto Immutable instance</h3>
            To create an Auto Immutable instance, simply instantiate the AutoImmutable class.
        </div>
        <div className="snippet-box">
            <Header>sample-instance.js</Header>
            <CodeBlock>{ INSTANTIATE_SAMPLE }</CodeBlock>
        </div>
        <div className="snippet-intro" id="use">
            <h3>Using the Auto Immutable instance</h3>
            Once instantiated, the new instance can be exported and reused.
        </div>
        <div className="snippet-box">
            <Header>user1.js</Header>
            <CodeBlock>{ USING_SAMPLE }</CodeBlock>
        </div>
        <div className="snippet-intro" id="share">
            <h3>Sharing the Auto Immutable instance</h3>
            Once instantiated, all connected users are reading and writing the same underlying immutable data.
        </div>
        <div className="snippet-box">
            <Header>user2.js</Header>
            <CodeBlock>{ SHARING_SAMPLE }</CodeBlock>
        </div>
    </article>
);

StartPage.displayName = 'StartPage';

export default StartPage;
