import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
const App = () => {
    return (
        <div className="ui container">

            <BrowserRouter>
                <div>
                    <Header />
                </div>
                <div>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;

/*//Very basic example of how React Routing works
const PageOne = () => {
    return <div>PageOne</div>;
};

const PageTwo = () => {
    return <div>
        PageTwo
        <button>Hey</button>
        </div>;
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Route path="/" exact component={PageOne} />
                <Route path="/pageTwo" exact component={PageTwo} />
            </div>
            </BrowserRouter>
        </div>
    )
}
*/