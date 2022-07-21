import React from 'react';
import './Footer.scss';
import Image from '../../../Image/Image';
import { BsTwitter } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';




function Footer() {
  return (
      <div className='footer_section'>
          <div className="footer__wrapper">
              <div className="footer__menu">
                  <div className='menu__column'>
                      <h2>
                          Home
                      </h2>
                      <li>Home</li>
                      <li>Community</li>
                      <li>Event</li>
                      <li>Contact</li>
                  </div>
                  <div>
                  <h2>
                  Resources
                      </h2>
                      <li>Blogs</li>
                      <li>News</li>
                      <li>Guides</li>
                      <li>Help Center</li>
                  </div>
                  <div>
                  <h2>
                  Community
                      </h2>
                      <li>NewsFeed</li>
                      <li>profile</li>
                      <li>Friends</li>
                      <li>Forums</li>
                  </div>
                  <div>
                  <h2>
                  Main Links
                      </h2>
                      <li>Members</li>
                      <li>Activity</li>
                      <li>Group</li>
                      <li>Private Group</li>
                  </div>
              </div>
              <div className="news__letter">
                  <h1>Subscribe Cirkle Newsletter</h1>
                  <p>
                  Subscribe to be the first one to know about updates. Enter your email
                  </p>
                  <div className="cta_button">
                      <input type="email" placeholder='Email Address'/> <button>Subscribe</button>
                  </div>
              </div>
          </div>
          <div className="sub_footer">
              <div className="sub_footer-wrapper">
                 <div> <p>Besnik Creative Agency.</p> </div>
                 <div> <img src={Image.footerLogo} alt="" /> </div>
                  <div className='social_icon'>
                      <span> <BsTwitter/> </span>
                      <span> <FiInstagram/> </span>
                      <span> <FaFacebookF/> </span>
                      <span> <FaLinkedinIn/> </span>
                 </div>
              </div>
          </div>
      </div>
  )
}

export default Footer