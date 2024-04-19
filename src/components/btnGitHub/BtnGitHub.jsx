import gitHubIcon from './gitHub-black.svg';

const BtnGitHub = ({ link }) => (
  <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
    <img src={gitHubIcon} alt="GitHubIcon" />
			GitHub repo
  </a>
);

export default BtnGitHub;
