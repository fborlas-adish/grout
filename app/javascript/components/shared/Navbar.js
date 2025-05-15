import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Navbar = ({logoutPath, csrfToken}) => {
  const handleLogout = async () => {
    try {
      await axios.delete(logoutPath, {
        headers: {
          "X-CSRF-Token": csrfToken,
          "Content-Type": "application/json",
        },
      });
      window.location.href = "/"; // redirect after logout
    } catch (error) {
      console.error("Logout failed", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <nav className="bg-gradient-to-r from-purple-400 to-purple-600 text-white py-4 px-8 shadow-md rounded-b-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Grout</div>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/about" className="hover:underline">About</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
          <li><a href="#" onClick={handleLogout} className="hover:underline">Log out</a></li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logoutPath: PropTypes.string,
  csrfToken: PropTypes.string
};

export default Navbar;
