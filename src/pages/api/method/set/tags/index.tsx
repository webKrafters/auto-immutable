import React from 'react';

import Anchor, { Props as AnchorProps } from '../../../../../partials/anchor';
import ListItem from '../../../../../partials/list-item';
import Paragraph from '../../../../../partials/paragraph';

const TagLink : React.FC<AnchorProps> = ({ to, ...props }) => (
    <Anchor
        style={{
            fontStyle: 'italic',
            fontWeight: 500,
            marginRight: 6
        }}
        to={ `/api/method/set/tags/${ to }-usage` }
        { ...props }
    />
);

const SetMethodApiTagsPage : React.FC<{className: string}> = ({ className }) => (
    <article className={ `set-method-api-tags-page ${ className }` }>
        <h1>Set Method Tags Commands</h1>
        <Paragraph>By default, the <strong><Anchor to="/api#consumer">consumer's</Anchor></strong> <code>set(...)</code> method recursively merges new changes into current immutable data.</Paragraph>
        <Paragraph>To overwrite current Immutable data slices with new values, <strong>7</strong> tag commands have been provided:</Paragraph>
        <Paragraph>
            <ListItem><div><TagLink to="clear">@@CLEAR:</TagLink> sets property to its corresponding empty value.</div></ListItem>
            <ListItem><div><TagLink to="delete">@@DELETE:</TagLink> removes plain object properties and array items.</div></ListItem>
            <ListItem><div><TagLink to="move">@@MOVE:</TagLink> moves array elements.</div></ListItem>
            <ListItem><div><TagLink to="push">@@PUSH:</TagLink> pushes new items into an array.</div></ListItem>
            <ListItem><div><TagLink to="replace">@@REPLACE:</TagLink> replaces property values.</div></ListItem>
            <ListItem><div><TagLink to="set">@@SET:</TagLink> sets property values.</div></ListItem>
            <ListItem><div><TagLink to="splice">@@SPLICE:</TagLink> splices array items.</div></ListItem>
        </Paragraph>
    </article>
);

export default SetMethodApiTagsPage;
