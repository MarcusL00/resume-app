
import { NavLink, Outlet } from 'react-router-dom';

function ProjectPage() {
  
    const projects = [1,2,3,4];

    return (
    <div>
        {projects.map((project)=> (
            <NavLink key={project} to={`/projects/${project}`}>
                Project {project}
            </NavLink>
        ))}


        <Outlet />
    </div>
  )
}

export default ProjectPage