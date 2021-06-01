import React, { useEffect, useState, useMemo } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { getIssues } from './api/api';
import Issues from './component/Issues/Issues';
import Pagination from './component/Pagination/Pagination';
import './App.css';
import filter from './filter';
import Issue from './component/Issues/Issue';

const App = () => {
  const [issues, setIssues] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [issuesPerPage] = useState(10);

  useEffect(() => {
    setLoading(false);
    getIssues().then((res) => {
      setIssues(res);
      setLoading(false);
    });
  }, []);

  const [nameFilter, setNameFilter] = useState('');

  const filteredIssues = useMemo(
    () => filter(issues, nameFilter),
    [issues, nameFilter]
  );

  //get current issues
  const indexofLastIssue = currentPage * issuesPerPage;
  const indexofFirstIssue = indexofLastIssue - issuesPerPage;
  const currentIssues = filteredIssues.slice(
    indexofFirstIssue,
    indexofLastIssue
  );

  // change page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: 1000,
              }}
            >
              <p>
                <strong>Filter By : &nbsp;</strong>
              </p>
              <input
                type="search"
                placeholder="Search for items"
                className="search-keyword"
                onChange={(e) => setNameFilter(e.target.value)}
              />
            </div>
            <Issues issues={currentIssues} />
            <Pagination
              issuesPerPage={issuesPerPage}
              totalIssues={filteredIssues.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </Route>
          <Route path="/issue/:id" component={Issue} />
        </Switch>
      </Router>
    </div>
  );
};
export default App;
