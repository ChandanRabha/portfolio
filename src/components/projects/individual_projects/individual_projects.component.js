import './individual_projects.component.css'

export const IndividualProjects = (props) => {
    
    return (
        <div>
               <h1>{props.eachProject[0]}</h1>
               <img src={props.eachProject[1]} alt="Project_Image"></img>
        </div>
    )
}
