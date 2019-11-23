import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

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