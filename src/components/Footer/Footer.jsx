import React from 'react';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const socialLinks = [
  { src: facebook_icon, alt: 'Facebook icon is not working', link: 'https://facebook.com' },
  { src: instagram_icon, alt: 'Instagram icon is not working', link: 'https://instagram.com' },
  { src: twitter_icon, alt: 'Twitter icon is not working', link: 'https://twitter.com' },
  { src: youtube_icon, alt: 'YouTube icon is not working', link: 'https://youtube.com' },
];

const footerLinks = [
  'Audio Description', 'Help Centre', 'Gift Card', 'Media Centre', 
  'Investor Relations', 'Jobs', 'Terms of Use', 'Privacy', 
  'Legal Notices', 'Cookie Preferences', 'Corporate Information', 'Contact Us'
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        {socialLinks.map((icon, index) => (
          <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
            <img src={icon.src} alt={icon.alt} />
          </a>
        ))}
      </div>
      <ul>
        {footerLinks.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
      <p className="copyright-text">&copy; 1997-2025 StreamX, Inc.</p>
    </footer>
  );
};

export default Footer;