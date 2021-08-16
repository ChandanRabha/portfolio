import './projects.component.css';

import {useContext} from 'react';
import {TestContext} from '../../TestContext'


import {IndividualProjects} from './individual_projects/individual_projects.component';
export const Projects = (props) => {
    const context = useContext(TestContext)
    console.log(context)
    return (
        <div id="Projects">
            {/* {context} */}
            {props.data.map(projects=><IndividualProjects eachProject={projects} key={props.data.indexOf(projects)} />)}
        </div>
    )
}
