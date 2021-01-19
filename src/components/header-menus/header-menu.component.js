import './header-menu.component.css'

function HeaderMenus(props) {
  return (
         <li className='animate__animated'>{props.title}</li>
);
}

export default HeaderMenus;