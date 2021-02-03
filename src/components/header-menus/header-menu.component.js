import './header-menu.component.css'

function HeaderMenus(props) {
  return (
         <li className='animate__animated'><a href={"#"+props.pin}>{props.title}</a></li>
);
}

export default HeaderMenus;
