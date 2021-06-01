import React, { useEffect, useState } from 'react';
import ReactMarkDown from 'react-markdown';
import { fetchIssueReadme, renderIssueReadme } from '../../api/api';

const Markdown = (props) => {
  const [issueMDURL, setIssueMDURL] = useState();
  const [issueMD, setIssueMD] = useState();

  useEffect(() => {
    fetchIssueReadme(props.repoURL.join('')).then((res) => {
      console.log(res.data.downloads_url);
      setIssueMDURL(res.data.downloads_url);
    });

    if (issueMDURL) {
      renderIssueReadme(issueMDURL).then((res) => {
        console.log(res.data);
        setIssueMD(res.data);
      });
    }
  }, [props.repoURL, issueMDURL]);

  return (
    <React.Fragment>
      <h5 style={{ fontSize: '1.5rem' }}>MD of the repository</h5>
      <ReactMarkDown children={issueMD}  className="issueMD" />
    </React.Fragment>
  );
};

export default Markdown;
