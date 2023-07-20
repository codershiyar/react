import { Link,NavLink } from "react-router-dom";

function Nav() {
    return (  
        <nav>
           <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>

           </ul>
        </nav>
     );
}
  
export default Nav;