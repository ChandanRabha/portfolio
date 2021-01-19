import './heading.component.css'
import HeaderMenus from '../header-menus/header-menu.component.js'

 export const Heading = () => {
  return (
    <div className='header'>
       <h1 className='animate__animated animate__rollIn'>CR</h1> 
       <ul className='menus'>
         <HeaderMenus title='Home' />
         <HeaderMenus title='About Me' />
         <HeaderMenus title='Projects' />
         <HeaderMenus title='Contact Me' />
       </ul>
    </div>);
}
