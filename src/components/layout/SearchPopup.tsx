import React from "react";
import Link from "next/link";

// Define props interface
interface SearchPopupProps {
  isPopup: boolean; // Indicates whether the popup is active
  handlePopup: () => void; // Function to handle popup state
}

const SearchPopup: React.FC<SearchPopupProps> = ({ isPopup, handlePopup }) => {
  return (
    <>
      <div className={`search-popup ${isPopup ? "active" : ""}`}>
        <div
          className="search-popup__overlay search-toggler"
          onClick={handlePopup}
        ></div>
        <div className="search-popup__content">
          <form action="#">
            <label htmlFor="search" className="sr-only">
              Search here
            </label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="icon-search-interface-symbol"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchPopup;
