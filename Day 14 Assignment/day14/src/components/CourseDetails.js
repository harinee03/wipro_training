import React from 'react';

const CourseDetails = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h4>Course Details</h4>
      </div>
      <div className="card-body">
        <h5>MERN Stack Development</h5>
        <ul>
          <li>Duration: 1 month</li>
          <li>Level: Intermediate</li>
          <li>Projects: 3 real-world projects</li>
          <li>Certificate: Included</li>
        </ul>
        <p>Learn MERN Stack Development with hands-on projects and best practices.</p>
      </div>
    </div>
  );
};

export default CourseDetails;