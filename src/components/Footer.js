import React from 'react';

const Footer = () => {
return (
  <div className="cards">
    <div className="card">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCODENVE579"
      >
        <img
          src="http://banners.wunderground.com/cgi-bin/banner/ban/wxBanner?bannertype=pws250&weatherstationcount=KCODENVE579"
          width="250"
          height="150"
          border="0"
          alt="Weather Underground PWS KCODENVE579"
        />
      </a>
    </div>
    <div className="card">
      <h3 className="card-title">ClimaStatus | Additional Info</h3>
      <p className="card-summary">
        Data updating from IoT weather sensors, wherever they're connected. This dashboard is built using
        React and Chart.js.
      </p>
      <a href="https://www.danbeerman.com" target="_blank" rel="noopener noreferrer">
        By Dan Beerman. Connect to learn.
      </a>
    </div>
    <div className="card">
      <h3 className="card-title">Useful Links</h3>
      <ul className="card-summary">
        <li>
          <a href="https://www.raspberrypi.org/" target="_blank" rel="noopener noreferrer">
            Raspberry Pi
          </a>
        </li>
        <li>
          <a href="https://github.com/lebeerman/ClimaStatus-API" target="_blank" rel="noopener noreferrer">
            ClimaStatus API Repo
          </a>
        </li>
        <li>
          <a href="https://github.com/lebeerman/ClimaStatus" target="_blank" rel="noopener noreferrer">
            ClimaStatus Front End Repo
          </a>
        </li>
        <li>
          <a href="https://github.com/lebeerman/" target="_blank" rel="noopener noreferrer">
            DB Github
          </a>
        </li>
        <li>
          <a href="https://astro-pi.org/" target="_blank" rel="noopener noreferrer">
            Astro Pi
          </a>
        </li>
      </ul>
    </div>
  </div>
);
};


export default Footer;