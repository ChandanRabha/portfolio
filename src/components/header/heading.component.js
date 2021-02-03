import './heading.component.css'
import HeaderMenus from '../header-menus/header-menu.component.js'
import {Socials} from '../socials/socials'

 export const Heading = () => {
  //  function myFunc(e){
  //     var x = document.getElementById("menus");
  //     if (x.className === "menus") {
  //       x.className += " responsive";
  //     } else {
  //       x.className = "menus";
  // }
  //  }
  return (
    <div className='header'>
       <h1 className='animate__animated animate__rollIn'>CR</h1> 
       <div id="socials">
         <Socials icon="fab fa-github    fa-2x" color="#24292e" url="https://github.com/ChandanRabha/"/>
         <Socials icon="fab fa-twitter   fa-2x" color="#50abf1" url="https://twitter.com/Chandan_Rabha12"/>
         <Socials icon="fab fa-facebook  fa-2x" color="#4867aa" url="https://www.facebook.com/chang.rabha/"/>
         <Socials icon="fab fa-linkedin  fa-2x" color="#0077b5" url="https://www.linkedin.com/in/chandan-rabha-2b5453152/"/>
       </div>
       <ul className='menus' id="menus">
         <HeaderMenus title='Home' pin="Home" />
         <HeaderMenus title='About' pin='Pin_About'  />
         <HeaderMenus title='Projects' pin='Pin_Project'  />
         <HeaderMenus title='Contact'  pin='Contact' />
         {/* <li className='icon' onClick={myFunc}>X</li> */}
       </ul>
      
    </div>);
}
