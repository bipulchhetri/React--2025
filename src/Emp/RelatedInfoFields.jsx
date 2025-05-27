// RelatedInfoFields.js
import React from 'react';

const RelatedInfoFields = ({ formData, handleChange, savedData }) => {
  return (
    <div className="tab-content">
      <h2>Related Information</h2>

      {/* Address1 Field */}
      <div className="form-group">
        <label htmlFor="address1">Address:</label>
        <input
          type="text"
          id="address1"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
          placeholder="Enter primary address"
        />
        {savedData && savedData.address1 && (
          <p className="saved-value">Currently saved: <strong>{savedData.address1}</strong></p>
        )}
      </div>

      {/* Employee ID Field */}
      <div className="form-group">
        <label htmlFor="employeeId">Employee ID:</label>
        <input
          type="text"
          id="employeeId"
          name="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          placeholder="Enter employee ID"
        />
        {savedData && savedData.employeeId && (
          <p className="saved-value">Currently saved: <strong>{savedData.employeeId}</strong></p>
        )}
      </div>

      {/* Date of Birth Field */}
      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        {savedData && savedData.dateOfBirth && (
          <p className="saved-value">Currently saved: <strong>{savedData.dateOfBirth}</strong></p>
        )}
      </div>

      {/* Address2 Field */}
      <div className="form-group">
        <label htmlFor="address2">Secondary Address:</label>
        <input
          type="text"
          id="address2"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
          placeholder="Enter secondary address (optional)"
        />
        {savedData && savedData.address2 && (
          <p className="saved-value">Currently saved: <strong>{savedData.address2}</strong></p>
        )}
      </div>
    </div>
  );
};

export default RelatedInfoFields;