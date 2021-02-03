// import splash_bg from '../../res_external/img/splash_bg.jpg';
import './landing-page.css';

export const Landing = () => {
    return (
        // <div className='splash' style={{backgroundImage:`url(`+splash_bg+`)`}}>
        <div className='splash' >
            <div style={{textAlign:'center',textShadow: '5px 1px grey'}}>
                 <h1 className='animate__animated animate__fadeInLeft'>Hi, My Name is Chandan Rabha</h1>
                 <h1 className='animate__animated animate__fadeIn animate__slow'>Welcome To My Dungeon</h1>
                 <a className='animate__animated animate__fadeIn animate__delay-1s' href="#Pin_About" id='explore'>Explore</a>
            </div>
            {/* <div style={{width:'300px',position:"relative"}}>
                <div className="pentagon"></div>
                <div className="pentagon"></div>
                <img style={{width:'100%',borderRadius:'100px'}} src={me} alt="Me"></img>
            </div> */}
            <label style={{position:'absolute',left:'0',bottom:'0',visibility:'hidden'}} id="Pin_About">About Pin</label>
        </div>
    )
}
