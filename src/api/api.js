import axios from 'axios';

const url = 'https://api.github.com';
//const githubToken = 'ghp_jdvyRWVjgknHwzTyUP6vfYg8RJM5FG2p';

export const fetchIssues = async () => {
  return await axios.get(
    /* `${url}/search/issues?q={facebook}&per_page=100&page_number=1` */
    `${url}/repos/facebook/react/issues`
  );
};

export const getIssues = async () => {
  const issues = await fetchIssues();

  return await issues.data;
};

export const fetchIssueReadme = async (urlIssue) => {
  return await axios.get(`${urlIssue}`);
};

export const renderIssueReadme = async (urlReadme) => {
  return await axios.get(urlReadme);
};

export const getComments = async (urlComments) => {
  return await axios.get(urlComments);
};

//https://api.github.com/search/issues?q={facebook}&per_page=100&page_number=1
/* `${url}/repos/facebook/react/issues`, */