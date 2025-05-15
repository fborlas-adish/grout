import React from "react"
import PropTypes from "prop-types"

const Card = ({children}) => {
  return (
    // <div className="bg-gradient-to-br from-pink-300 via-purple-300 to-purple-400 shadow-lg shadow-purple-500/40 rounded-3xl p-6 transform transition-transform duration-300 hover:scale-105">
    <div className="bg-gradient-to-br from-pink-300 via-purple-300 to-purple-400 rounded-3xl p-5 shadow-lg shadow-purple-500/40 relative overflow-hidden"
      style={{boxShadow: "inset 0 8px 20px rgba(0, 0, 0, 0.2), inset 0 -8px 20px rgba(255, 255, 255, 0.15)"}}
    >  
      {children}
    </div>
    // </div>
  )
}

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default Card
