import React from 'react';
import ComponentBase from './ComponentBase';

class Department extends ComponentBase {
  renderContent() {
    return (
      <div className="department-card">
        <h2>Department Details</h2>
        <p><strong>Department Name:</strong> IT</p>
        <p><strong>Department ID:</strong> D101</p>
      </div>
    );
  }
}

export default Department;
