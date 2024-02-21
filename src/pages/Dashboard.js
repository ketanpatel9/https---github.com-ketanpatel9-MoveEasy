import React, { useState } from 'react';
import '../Dashboard.css'; // Ensure the path to the CSS file is correct
import HistoryForm from './HistoryForm'; 
import RecentActivityForm from './RecentActivityForm';
import ProfileForm from './ProfileForm';
function Dashboard() {
  // State to manage which content is displayed on the right
  const [activeContent, setActiveContent] = useState('profile');

  // Function to handle link clicks
  const handleLinkClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className="base">
      <div className="dashboard-left">
      <div className="dashboard-heading">
          Dashboard
        </div>
      <div onClick={() => handleLinkClick('profile')} 
             className={activeContent === 'profile' ? 'active' : ''}>
          Profile
        </div>
        <div onClick={() => handleLinkClick('history')} 
             className={activeContent === 'history' ? 'active' : ''}>
          History
        </div>
        <div onClick={() => handleLinkClick('recentActivity')} 
             className={activeContent === 'recentActivity' ? 'active' : ''}>
          Recent Activity
        </div>
      </div>
      <div className="dashboard-right">
        {activeContent === 'profile' && (
          <div className="profile-content">
            <h2>Profile</h2>
            <p>Welcome! Abhishek Sharma</p>
            <ProfileForm />
          </div>
        )}
        {activeContent === 'history' && (
          <div className="history-content">
            <h2>History</h2>
            <p>History details and logs...</p>
            <HistoryForm /> {/* Add the HistoryForm component here */}
          </div>
        )}
        {activeContent === 'recentActivity' && (
          <div className="recent-activity-content">
            <h2>Recent Activity</h2>
            <p>Recent activity details...</p>
            <RecentActivityForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
