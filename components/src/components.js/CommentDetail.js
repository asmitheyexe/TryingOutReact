import React from 'react';
// functional component that represents a Comment component
// Simple
const CommentDetail = props => {
    return (
     <div className="comment">
        <a href="/" className="avatar" >
            <img alt="avatar" src={props.avatarSrc} />
        </a>
        <div className="content">
            <a href="/" className="author" >
                {props.author}
            </a>
            <div className="metadata">
                 <span className="date">{props.timeStamp}</span>
            </div>
             <div className="text"> {props.commentInfo} </div>
        </div>
    </div>
    );
};

export default CommentDetail;