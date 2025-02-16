import React from 'react';
import ComponentBase from './ComponentBase';

class Employee extends ComponentBase {
  renderContent() {
    return (
      <div className="employee-card">
        <h2>Employee Details</h2>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Salary:</strong> $50,000</p>
      </div>
    );
  }
}

export default Employee;
