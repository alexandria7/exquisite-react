import React from 'react';
import './RecentSubmission.css';

const RecentSubmission = (props) => {
  return (
    <div className="RecentSubmission">
      {props.recentPoem !== '' ? <h3>The Most Recent Submission</h3> : ''}
      <p className="RecentSubmission__submission">{ props.recentPoem }</p>
    </div>
  );
}

export default RecentSubmission;
