import './header-menu.component.css'

function HeaderMenus(props) {
  return (
         <li className='animate__animated'><a href={"#"+props.title}>{props.title}</a></li>
);
}

export default HeaderMenus;
