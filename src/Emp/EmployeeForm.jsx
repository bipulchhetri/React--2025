

// ProfileForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileDetails.css";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    university: "",
    role: "",
    manager: "",
    gender: "",
    dob: "",
    workplace: "",
    status: "",
    position: "",
    education: "",
    rate: "",
    religion: "",
    nation: "",
    marital: "",
    citizenId: "",
    issueDate: "",
    birthPlace: "",
    address: "",
    accountNo: "",
    bankBranch: "",
    bankName: "",
    taxCode: "",
    linkedin: "",
    facebook: "",
    github: "",
    image: null,
    imageUrl: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: file, imageUrl });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/Profile", { state: formData });
  };

  return (
    <div className="form-container">
      <h2>Profile Form</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Profile Information</legend>
          <input type="file" name="image" onChange={handleChange} />
          <input type="text" name="name" placeholder="Name" onChange={handleChange} />
          <input type="text" name="age" placeholder="Age" onChange={handleChange} />
          <input type="text" name="email" placeholder="Email" onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone" onChange={handleChange} />
          <input type="text" name="university" placeholder="University" onChange={handleChange} />
          <input type="text" name="role" placeholder="Job Role" onChange={handleChange} />
          <input type="text" name="manager" placeholder="Direct Manager" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>General Information</legend>
          <input type="text" name="gender" placeholder="Gender" onChange={handleChange} />
          <input type="date" name="dob" onChange={handleChange} />
          <input type="text" name="workplace" placeholder="Workplace" onChange={handleChange} />
          <input type="text" name="status" placeholder="Employment Status" onChange={handleChange} />
          <input type="text" name="position" placeholder="Job Position" onChange={handleChange} />
          <input type="text" name="education" placeholder="Academic Level" onChange={handleChange} />
          <input type="text" name="rate" placeholder="Hourly Rate" onChange={handleChange} />
          <input type="text" name="religion" placeholder="Religion" onChange={handleChange} />
          <input type="text" name="nation" placeholder="Nation" onChange={handleChange} />
          <input type="text" name="marital" placeholder="Marital Status" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>Related Information</legend>
          <input type="text" name="citizenId" placeholder="Citizen ID Type" onChange={handleChange} />
          <input type="date" name="issueDate" onChange={handleChange} />
          <input type="text" name="birthPlace" placeholder="Place of Birth" onChange={handleChange} />
          <input type="text" name="address" placeholder="Current Address" onChange={handleChange} />
          <input type="text" name="accountNo" placeholder="Bank Account Number" onChange={handleChange} />
          <input type="text" name="bankBranch" placeholder="Bank Branch Name" onChange={handleChange} />
          <input type="text" name="bankName" placeholder="Bank Name" onChange={handleChange} />
          <input type="text" name="taxCode" placeholder="Tax Code" onChange={handleChange} />
        </fieldset>

        <fieldset>
          <legend>Social Media Links</legend>
          <input type="text" name="linkedin" placeholder="LinkedIn URL" onChange={handleChange} />
          <input type="text" name="facebook" placeholder="Facebook URL" onChange={handleChange} />
          <input type="text" name="github" placeholder="GitHub URL" onChange={handleChange} />
        </fieldset>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EmployeeForm;


// ProfileForm.css
