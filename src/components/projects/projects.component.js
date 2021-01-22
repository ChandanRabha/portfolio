import './projects.component.css';
import {IndividualProjects} from './individual_projects/individual_projects.component';
export const Projects = (props) => {
    return (
        <div id="Projects">
            
            {props.data.map(projects=><IndividualProjects eachProject={projects} key={props.data.indexOf(projects)} />)}
        </div>
    )
}
