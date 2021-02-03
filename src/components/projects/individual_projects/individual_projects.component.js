import './individual_projects.component.css'

export const IndividualProjects = (props) => {

    // console.log(props)
    
    return (
        <div className='box'>
               <h1>{props.eachProject[0]}</h1>
               <img src={props.eachProject[1]} alt="Project_Image"></img>
               <div id='ProjectLinks'>
                   <button onClick={()=>window.location.href=props.eachProject[2]}> <i className="fab fa-github fa-2x"></i> View on Github</button> 
                   <button  onClick={()=>window.location.href=props.eachProject[3]}> <i className="fas fa-search fa-2x"></i> Visit Application</button></div>
        </div>
    )
}
