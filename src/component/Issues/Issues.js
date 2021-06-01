import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';
import './Issues.css';

const Issues = ({ issues }) => {
  return (
    <div className="Issues">
      {issues.map((issue) => {
        return (
          <div className="Issue" key={issue.id}>
            <Link
              to={{
                pathname: `/issue/${issue.id}`,
                details: {
                    issue: issue
                },
              }}
            >
              <div className="header d-inline">
                <span className="status">
                  {issue.state === 'open' ? (
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  ) : (
                    <FontAwesomeIcon icon={faCheckCircle} />
                  )}
                </span>
                <h5 className="title d-inline">{issue.title}</h5>
              </div>
            </Link>
            <div className="labels d-inline">
              {issue.labels.length
                ? issue.labels.map((label) => {
                    return (
                      <span
                        key={label.id}
                        style={{ backgroundColor: `#${label.color}` }}
                        className="label"
                      >
                        {label.name}
                      </span>
                    );
                  })
                : null}
            </div>
            <div className="infoTicket">
              <span className="id">#${issue.id}</span>
              <span className="createdAt">opened {issue.created_at}</span>
              <span className="by"> by {issue.user.login}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Issues;
