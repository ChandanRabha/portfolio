import './about.css'
import me from '../../res_external/img/Me.png';
export const About= () => {
    return (
        <div className='about'>
            <div>
                <h1>About Me</h1>
                <p>I am a passionate Software Developer and love designing and making web applications as my hobby as well as my passion. I currently reside in Guwahati, India</p>
            </div>
            <div style={{width:'300px'}}><img style={{width:'100%'}}  src={me} alt='my_face_:-)'></img></div>
        </div>
    )
}
