// Profile.js
import React, { useState, useEffect } from 'react';
import './Profile.css'; // We'll create this for styling

const LOCAL_STORAGE_KEY_STAFF = 'staffFormData'; // Must match the key in StaffForm

const Profile = () => {
  const [staffData, setStaffData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setError('');
    try {
      const storedData = localStorage.getItem(LOCAL_STORAGE_KEY_STAFF);
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setStaffData(parsedData);
        console.log('Profile data fetched from local storage:', parsedData);
      } else {
        console.log('No staff data found in local storage for Profile.');
        setStaffData(null); // Explicitly set to null if no data
      }
    } catch (err) {
      console.error("Error parsing staff data from local storage for Profile:", err);
      setError('Could not load staff data. It might be corrupted.');
      setStaffData(null);
    } finally {
      setIsLoading(false);
    }
  }, []); // Empty dependency array means this runs once on mount

  // Optional: Add a way to re-fetch if needed, e.g., by listening to a custom event
  // or if this component is part of a larger app with state management.
  // For now, it fetches on mount. If StaffForm updates localStorage and this
  // component is re-rendered (e.g. route change), it would show new data.

  if (isLoading) {
    return <div className="profile-container"><p>Loading profile data...</p></div>;
  }

  if (error) {
    return <div className="profile-container error-message"><p>{error}</p></div>;
  }

  if (!staffData) {
    return <div className="profile-container"><p>No staff data available to display.</p></div>;
  }

  return (
    <div className="profile-container">
      <h2>Staff Profile Information</h2>
      <div className="profile-section">
        <h3>Staff Details</h3>
        <p><strong>Name:</strong> {staffData.name || 'N/A'}</p>
        <p><strong>Age:</strong> {staffData.age || 'N/A'}</p>
        <p><strong>Employee ID:</strong> {staffData.employeeId || 'N/A'}</p>
        <p><strong>Date of Birth:</strong> {staffData.dateOfBirth || 'N/A'}</p>
      </div>
      <div className="profile-section">
        <h3>Additional Info</h3>
        <p><strong>Primary Address:</strong> {staffData.primaryAddress || 'N/A'}</p>
        <p><strong>Secondary Address:</strong> {staffData.secondaryAddress || 'N/A'}</p>
        <p><strong>LinkedIn:</strong> {staffData.linkedin ? <a href={staffData.linkedin} target="_blank" rel="noopener noreferrer">{staffData.linkedin}</a> : 'N/A'}</p>
        <p><strong>Facebook:</strong> {staffData.facebook ? <a href={staffData.facebook} target="_blank" rel="noopener noreferrer">{staffData.facebook}</a> : 'N/A'}</p>
        <p><strong>GitHub:</strong> {staffData.github ? <a href={staffData.github} target="_blank" rel="noopener noreferrer">{staffData.github}</a> : 'N/A'}</p>
      </div>
    </div>
  );
};

export default Profile;