import React from 'react';
import { Route, Switch} from 'react-router-dom'

import IndexBody from "./BodyComponents/Index/IndexBody";
import BlogBody from "./BodyComponents/Blog/BlogBody";

export default class Body extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/blog/:url" component={BlogBody} />
                <Route path="/" component={IndexBody} />
            </Switch>
        );
    }
}
