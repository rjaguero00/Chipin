import React from "react";
import "./Sidebar.css";

const Sidebar = () => (
    <nav id="sidebar">
        {/* <div className="sidebar-header">
            <h3>Organization/User Name</h3>
        </div> */}

        <ul className="list-unstyled components">
            <p>Organization/User Name</p> <img src="https://placeholder.baker.com/200" class="rounded mx-auto d-block" alt="..." />

            <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Events</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="">Saved Events</a>
                    </li>
                    <li>
                        <a href="">Post Events</a>
                    </li>
                    {/* <li>
                        <a href="">Home 3</a>
                    </li> */}
                </ul>
            </li>
            <li>
                <a href="">About</a>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="">Page 1</a>
                    </li>
                    <li>
                        <a href="">Page 2</a>
                    </li>
                    <li>
                        <a href="">Page 3</a>
                    </li>
                </ul>
            </li>
            {/* <li>
                <a href="">Portfolio</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li> */}
        </ul>
    </nav>
);

export default Sidebar;
