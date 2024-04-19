import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({ title, img, index }) => (
  <NavLink to={`/project/${index}`}>
    <li className="project">
      <figure className="project__img">
        <img src={img} alt={title} />
      </figure>
      <h3 className="project__title">{title}</h3>
    </li>
  </NavLink>
);

export default Project;
