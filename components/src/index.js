import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components.js/CommentDetail';
import ApprovalCard from './components.js/ApprovalCard';
function getTime(){
    return new Date().toLocaleTimeString();
}

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard >
                <CommentDetail
                    author="Adam"
                    timeStamp="Today 4:00PM"
                    commentInfo="Thats neat"
                    avatarSrc ={faker.image.avatar()}
                />

            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail
                    author="Andrea"
                    timeStamp="Today 4:20PM"
                    commentInfo="Hey thankss"
                    avatarSrc ={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>

        
        );
};

// Render the App component
ReactDOM.render(<App />, document.querySelector('#root'));