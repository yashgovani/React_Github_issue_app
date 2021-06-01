const filter = (issues, keyword) => {
  const arr = issues.filter((issue) => filterBySearchKeyword(issue, keyword));
  return arr;
};

const filterBySearchKeyword = (issue, keyword) => {
  if (issue.title.toLowerCase().includes(keyword.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

export default filter;
