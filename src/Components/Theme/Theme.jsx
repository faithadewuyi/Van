
import React, { useContext } from 'react';
import { ThemeContext } from "../../App"
const Theme = () => {
    const value = useContext(ThemeContext)
  return (
    <div className = {`value : "light" ? "dark"`}>
      <h1>  🎉</h1>
    </div>
  )
}

export default Theme
