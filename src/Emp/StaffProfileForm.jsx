// StaffForm.js
import React, { useState, useEffect } from 'react';
// import './StaffForm.css'; // We'll create this for styling

const LOCAL_STORAGE_KEY_STAFF = 'staffFormData';

const StaffProfileForm = () => {
  const [activeTab, setActiveTab] = useState('staffDetails'); // 'staffDetails' or 'additionalInfo'
  const [formData, setFormData] = useState({
    // Staff Details Tab
    name: '',
    age: '',
    employeeId: '',
    dateOfBirth: '',
    // Additional Info Tab
    primaryAddress: '',
    secondaryAddress: '',
    linkedin: '',
    facebook: '',
    github: '',
  });
  const [saveMessage, setSaveMessage] = useState('');

  // Load data from local storage on initial render
  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY_STAFF);
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setFormData(parsedData);
        console.log('Staff form data loaded from local storage:', parsedData);
      } catch (error) {
        console.error("Error parsing staff data from local storage:", error);
        localStorage.removeItem(LOCAL_STORAGE_KEY_STAFF); // Clear corrupted data
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setSaveMessage(''); // Clear message on new input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_STAFF, JSON.stringify(formData));
      setSaveMessage('Staff data saved successfully!');
      console.log('Staff Form Data Saved:', formData);
      // Optionally, you might want to alert the Profile component to re-fetch,
      // but since Profile fetches on its own mount/update, this might be automatic
      // if they are rendered in a way that causes Profile to re-render.
      // For simplicity, we rely on Profile fetching independently.
    } catch (error) {
      console.error('Failed to save staff data to local storage:', error);
      setSaveMessage('Error saving data. Please check the console.');
    }
  };

  return (
    <div className="form-container staff-form">
      <h2>Staff Information Form</h2>
      <div className="tab-header">
        <button
          className={`tab-button ${activeTab === 'staffDetails' ? 'active' : ''}`}
          onClick={() => setActiveTab('staffDetails')}
        >
          Staff Details
        </button>
        <button
          className={`tab-button ${activeTab === 'additionalInfo' ? 'active' : ''}`}
          onClick={() => setActiveTab('additionalInfo')}
        >
          Additional Info
        </button>
      </div>

      <form onSubmit={handleSubmit} className="tab-body">
        {activeTab === 'staffDetails' && (
          <div className="tab-content">
            <h3>Primary Details</h3>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="employeeId">Employee ID:</label>
              <input type="text" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
            </div>
          </div>
        )}

        {activeTab === 'additionalInfo' && (
          <div className="tab-content">
            <h3>Contact & Social Links</h3>
            <div className="form-group">
              <label htmlFor="primaryAddress">Primary Address:</label>
              <input type="text" id="primaryAddress" name="primaryAddress" value={formData.primaryAddress} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="secondaryAddress">Secondary Address:</label>
              <input type="text" id="secondaryAddress" name="secondaryAddress" value={formData.secondaryAddress} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="linkedin">LinkedIn Profile URL:</label>
              <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/yourprofile" value={formData.linkedin} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="facebook">Facebook Profile URL:</label>
              <input type="url" id="facebook" name="facebook" placeholder="https://facebook.com/yourprofile" value={formData.facebook} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="github">GitHub Profile URL:</label>
              <input type="url" id="github" name="github" placeholder="https://github.com/yourusername" value={formData.github} onChange={handleChange} />
            </div>
          </div>
        )}

        <div className="form-actions">
          <button type="submit" className="submit-button">Save Staff Data</button>
        </div>
        {saveMessage && <p className={`save-message ${saveMessage.includes('Error') ? 'error' : 'success'}`}>{saveMessage}</p>}
      </form>
    </div>
  );
};

export default StaffProfileForm;