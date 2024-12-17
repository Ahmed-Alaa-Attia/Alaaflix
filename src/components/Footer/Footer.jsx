import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <FaFacebookF size={23} color="#fff" cursor={"pointer"}/>
        <FaInstagram size={23} color="#fff" cursor={"pointer"}/>
        <FaTwitter size={23} color="#fff" cursor={"pointer"}/>
        <FaYoutube size={23} color="#fff" cursor={"pointer"}/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Hire me :)</li>
        <li>Help Center</li>
        <li>Gifts Cards</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefrences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <button className="btn">Service Code</button>
      <p className="copyright-text">© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer