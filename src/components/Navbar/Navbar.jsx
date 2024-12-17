import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileIcon from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";
import { PiPencilLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { logout } from "../../firebase";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const nav = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        nav.current.classList.add("nav-dark");
      } else {
        nav.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <nav className="navbar" ref={nav}>
      <div className="navbar-left">
        <img src={logo} alt="Netflix Logo" />
        <ul>
          <li className="active">Home</li>
          <li>Series</li>
          <li>Films</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={searchIcon} alt="Search" className="icons" />
        <img src={bellIcon} alt="Notifications" className="icons" />
        <div
          className="navbar-profile"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <img src={profileIcon} alt="Profile" />
          <img
            src={caretIcon}
            alt="Dropdown"
            className={`caret-icon ${isDropdownOpen ? "rotate" : ""}`}
          />

          <div className={`dropdown ${isDropdownOpen ? "show" : ""}`}>
            <div className="users">
              {["User 1", "User 2", "User 3", "User 4"].map((user, index) => (
                <div key={index} className="user">
                  <img src={profileIcon} alt={user} />
                  <p>{user}</p>
                </div>
              ))}
            </div>
            <div className="links">
              {[
                { icon: PiPencilLight, text: "Manage Profiles" },
                { icon: FaRegUser, text: "Transfer Profile" },
                { icon: PiPencilLight, text: "Accounts" },
                { icon: GoQuestion, text: "Help Center" },
              ].map((link, index) => (
                <div key={index} className="link">
                  <link.icon size={24} />
                  <p>{link.text}</p>
                </div>
              ))}
            </div>
            <div className="logout">
              <p onClick={()=>{logout()}}>Sign out of Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
