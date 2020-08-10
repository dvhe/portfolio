import React from 'react';
import MetaTags from 'react-meta-tags';
import { faGithubAlt, faTwitter, faDiscord, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <>
        <MetaTags>
          <title>Who is Imposed?</title>
          <meta id="meta-description" name="description" content="Backend Developer | Co-Founder of pebblo.org | Vue, React, JavaScript, TypeScript, Python" />
          <meta id="og-title" property="og:title" content="Kyle Bennett" />
          <meta id="theme-color" content="#4A86E8" />
        </MetaTags>
        <div className="intro intro-column">
          <h1 className="intro-title">Hello, my name is <span>Kyle Bennett</span></h1>

          <p className="intro-message">I am a backend developer currently working on <a href="https://pebblo.org" className="intro-link">pebblo</a>.
          In my free time I like to develop small projects like <a href="https://github.com/scrap/portfolio" className="intro-link">this</a></p>

          <div className="icons-column">
            <a className="socials" href="https://github.com/scrap" target="_blank"><FontAwesomeIcon icon={faGithubAlt} className="socials-icon" />scrap</a>
            <a className="socials" href="https://twitter.com/_imposed" target="_blank"><FontAwesomeIcon icon={faTwitter} className="socials-icon" />_Imposed</a>
            <a className="socials" href="/"><FontAwesomeIcon icon={faDiscord} className="socials-icon" />Imposed#0001</a>
            <a className="socials" href="mailto: me@impd.cc"><FontAwesomeIcon icon={faMailBulk} className="socials-icon" />me@impd.cc</a>
          </div>
        </div>

        <div className="spotify-column">
          {/* <p><FontAwesomeIcon icon={faSpotify} className="socials-icon" />Currently playing: Good Feeling - Flo Rida</p> */}
        </div>

      {/* <div className="projects-column">
        <p className="projects-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div> */}
    </>
  );
}

export default App;
