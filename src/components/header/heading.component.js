import './heading.component.css'
import HeaderMenus from '../header-menus/header-menu.component.js'

 export const Heading = () => {
   function myFunc(e){
      var x = document.getElementById("menus");
      if (x.className === "menus") {
        x.className += " responsive";
      } else {
        x.className = "menus";
  }
   }
  return (
    <div className='header'>
       <h1 className='animate__animated animate__rollIn'>CR</h1> 
       <ul className='menus' id="menus">
         <HeaderMenus title='Home' />
         <HeaderMenus title='About' />
         <HeaderMenus title='Projects' />
         <HeaderMenus title='Contact' />
         <li className='icon' onClick={myFunc}>X</li>
       </ul>
      
    </div>);
}
