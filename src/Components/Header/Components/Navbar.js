import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarT">
        <ul className="navbarItem">
          <li className="navbarItem"><NavLink end to="/staff/apply"><button>Apply</button></NavLink></li>
          <li className="navbarItem"><NavLink to="/staff"><button>Staff</button></NavLink></li>
          <li className="middleNav"><NavLink end to="/"><button>Home</button></NavLink></li>
          <li className="navbarItem"><NavLink end to="/status"><button>Status</button></NavLink></li>
          <li className="navbarItem"><NavLink end to="/status/players"><button>Players</button></NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
