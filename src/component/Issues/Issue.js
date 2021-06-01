import React from 'react';
//import Markdown from '../Markdown/Markdown';
import Comments from '../Comments/Comments';

const Issue = (props) => {
  const CommentsURL = Object.values(props.location.details.issue.comments_url);
  return (
    <React.Fragment>
      <Comments commentsURL={CommentsURL} />
    </React.Fragment>
  );
};

export default Issue;
