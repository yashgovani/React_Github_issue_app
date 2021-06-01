import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { getComments } from '../../api/api';
import './Comments.css';

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log(props.commentsURL.join(''));
    getComments(props.commentsURL.join('')).then((res) => {
      setComments(res.data);
      console.log(res.data);
    });
    
    
  }, [props.commentsURL]);

  return (
    <div className="Comments">
      <h3>Comments:</h3>
      {comments.map((comment) => {
        return (
          <React.Fragment key={comment.id}>
            <div className="CommentBody">
              <span className="User">{comment.user.login}</span>
              <ReactMarkdown
                children={comment.body}
                className="CommentsMarkDown"
              />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default Comments;
