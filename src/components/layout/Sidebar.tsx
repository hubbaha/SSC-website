import React from "react";
import Link from "next/link";

// Define the props interface
interface SidebarProps {
  isSidebar: boolean; // Indicates whether the sidebar is active
  handleSidebar: () => void; // Function to toggle the sidebar state
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebar, handleSidebar }) => {
  return (
    <>
      <div className={`sidebar ${isSidebar ? "active" : ""}`}>
        <div className="sidebar__overlay" onClick={handleSidebar}></div>
        <div className="sidebar__content">
          <button className="close-btn" onClick={handleSidebar}>
            Close
          </button>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
