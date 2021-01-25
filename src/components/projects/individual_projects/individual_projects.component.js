import './individual_projects.component.css'

export const IndividualProjects = (props) => {
    
    return (
        <div>
               <h1>{props.eachProject[0]}</h1>
               <img src={props.eachProject[1]} alt="Project_Image"></img>
               <div id='ProjectLinks'><button> <i className="fab fa-github fa-2x"></i> View on Github</button> <button> <i className="fas fa-search fa-2x"></i> Visit Application</button></div>
        </div>
    )
}
