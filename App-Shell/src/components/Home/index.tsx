/*
 * Package Import
 */
import React from 'react';
import { Link } from "react-router-dom";

/*
 * Local Import
 */

/*
 * Component
 */
const Home = () => (
  <div>
    <Link to="/signin">Sign In</Link>
    <Link to="/signup">Sign Up</Link>
  </div>
);

/*
 * Export
 */
export default Home;