import React from 'react'
// import { version, dependencies } from '../../../package.json'

import './Footer.css'

const Footer = () => {
  // const staging = process.env.REACT_APP_STAGING;

  return (
    <section className="footer">
      <section className="footer-links">
        <span className="social-links">
          <a
            className="footer-icon github"
            href="https://github.com/SwampyFinance/Swampy-Finance"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <p> </p>
          </a>
        </span>
        <span className="social-links">
          <a
            className="footer-icon discord"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            title="Discord"
          >
            <p> </p>
          </a>
        </span>
        <span className="social-links">
          <a
            className="footer-icon twitter"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <p> </p>
          </a>
        </span>
      </section>
    </section>
  )
}

export default Footer
