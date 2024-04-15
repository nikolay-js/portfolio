import "./style.css";

import gitHubIcon from './../../img/icons/gitHub.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Nikolay</em>
          </strong>
          <br />a frontend developer
				</h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a href="https://github.com/nikolay-js" target="_blank" rel="noreferrer" className="btn">
          <img src={gitHubIcon} alt="GitHubIcon" />
          View GitHub
				</a>
      </div>
    </header>
  );
}

export default Header;
