import './about.css'
import me from '../../res_external/img/Me3.jpg';
export const About= () => {
    return (
        <div className='about' id="About">
            <div>
                <h1 style={{fontSize:'3rem',margin:'0'}}>About Me</h1>
                <p>I am a passionate Software Developer and love designing and making web applications as my hobby as well as my passion. I currently reside in Guwahati, India <i className="fas fa-map-marker-alt"></i></p>
            </div>
            <div style={{width:'300px'}}><img style={{width:'100%'}}  src={me} alt='my_face_:-)'></img></div>
        </div>
    )
}
