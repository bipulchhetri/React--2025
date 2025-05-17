// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Profile = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const data = location.state;

//   if (!data) {
//     return (
//       <div className="text-center mt-10">
//         <p>No data submitted. Please fill the form first.</p>
//         <button
//           onClick={() => navigate("/profile-form")}
//           className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
//         >
//           Go to Form
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Profile Details</h2>
//       <div className="space-y-2">
//         {Object.entries(data).map(([key, value]) => (
//           <div key={key} className="border-b pb-2">
//             <strong>{key}:</strong> {value}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProfileDetails.css";

const ProfileDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className="centered">
        <p>No data submitted.</p>
        <button onClick={() => navigate("/profile-form")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="left-column">
          <div className="avatar-section">
            <div className="avatar" />
            <h2>{data.name || "Name"}</h2>
            <div className="social-icons">
              {data.linkedin && <a href={data.linkedin}>🔗</a>}
              {data.facebook && <a href={data.facebook}>📘</a>}
              {data.github && <a href={data.github}>💻</a>}
            </div>
          </div>

          <div className="contact-card">
            {data.email && (
              <div>
                📧 <span>{data.email}</span>
              </div>
            )}
            {data.phone && (
              <div>
                📞 <span>{data.phone}</span>
              </div>
            )}
            {data.education && (
              <div>
                🎓 <span>{data.education}</span>
              </div>
            )}
            {data.jobTitle && (
              <div>
                💼 <span>{data.jobTitle}</span>
              </div>
            )}
            <div>Direct manager: 🧑‍💼</div>
          </div>
        </div>

        <div className="right-column">
          <h3>General Information</h3>
          <div className="info-grid">
            <div>Staff code</div>
            <div>{data.staffCode || "0001"}</div>
            <div>Staff name</div>
            <div>{data.name}</div>
            <div>Gender</div>
            <div>{data.gender || "N/A"}</div>
            <div>Birthday</div>
            <div>{data.dob || "N/A"}</div>
            <div>Phone</div>
            <div>{data.phone}</div>
            <div>Workplace</div>
            <div>{data.workplace || "N/A"}</div>
            <div>Status</div>
            <div>{data.status || "Full-time"}</div>
            <div>Job Position</div>
            <div>{data.jobTitle || "N/A"}</div>
            <div>Academic level</div>
            <div>{data.education || "N/A"}</div>
            <div>Hourly Rate</div>
            <div>{data.hourlyRate || "₹120.00"}</div>
            <div>Religion</div>
            <div>{data.religion || "Hindu"}</div>
            <div>Nation</div>
            <div>{data.nation || "India"}</div>
            <div>Marital Status</div>
            <div>{data.maritalStatus || "N/A"}</div>
          </div>

          <h3>Related Information</h3>
          <div className="info-grid">
            <div>Citizen ID</div>
            <div>{data.citizenId || "Aadhar Card"}</div>
            <div>Date of Issue</div>
            <div>{data.issueDate || "03rd May 2012"}</div>
            <div>Place of Birth</div>
            <div>{data.birthPlace || "Mumbai"}</div>
            <div>Current Address</div>
            <div>{data.address || "N/A"}</div>
            <div>Bank A/C No.</div>
            <div>{data.bankAccount || "**********"}</div>
            <div>Bank Branch</div>
            <div>{data.bankBranch || "N/A"}</div>
            <div>Bank Name</div>
            <div>{data.bankName || "State Bank of India"}</div>
            <div>Personal Tax Code</div>
            <div>{data.taxCode || "ABCD1234"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
