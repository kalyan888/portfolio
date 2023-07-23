import {
  IoMail,
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoTwitter,
  IoLogoInstagram,
} from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import Header from "../Header/Header";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-header-and-info-and-form-container">
          <div className="contact-header-container">
            <h1 className="contact-header">Contact</h1>
            <p className="contact-desc">
              Thank you for visiting. Hope you like it.
            </p>
          </div>

          <div className="contact-info-and-form-container">
            <div className="form-container">
              <div>
                <input
                  className="user-details"
                  placeholder="Your name"
                  type="input"
                />
                <input
                  className="user-details"
                  placeholder="Your email"
                  type="input"
                />
              </div>
              <textarea
                className="user-text"
                rows="4"
                cols="50"
                placeholder="Your message..."
                type="input"
              />
              <button className="btn" type="button">
                Send
              </button>
            </div>

            <div className="contact-info-container">
              <h1 className="contact-info-header">Contact Information</h1>

              <div>
                <div className="each-info-container">
                  <MdLocalPhone className="icons" />
                  <p className="info">+918883175888</p>
                </div>
                <div className="each-info-container">
                  <IoMail className="icons" />
                  <p className="info">kalyanguttula3175@gmail.com</p>
                </div>
              </div>

              <div className="social-media-container">
                <h1 className="social-media-header">Social Media</h1>
                <div>
                  <a
                    className="social-media-icons-color"
                    href="https://www.facebook.com/kalyan888"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <IoLogoFacebook className="social-media-icons" />
                  </a>
                  <a
                    className="social-media-icons-color"
                    href="https://instagram.com/__d_a_r_k_s_o_u_l____?igshid=YmMyMTA2M2Y="
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <IoLogoInstagram className="social-media-icons" />
                  </a>
                  <IoLogoGoogle className="social-media-icons" />
                  <IoLogoTwitter className="social-media-icons" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
