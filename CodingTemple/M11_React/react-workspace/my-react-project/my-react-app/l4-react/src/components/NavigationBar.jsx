import { Link, NavLink } from "react-router-dom";


function NavigationBar() {
   return (
       <nav className="clearfix"> 
       <Link to='/'>Home</Link>
       <Link to='/BrowseCharacters'>Browse Characters</Link>
       <Link to='/CharacterDetail'>Character Details</Link>
       <Link to='/Stories'>Stories</Link>
       
       </nav>
   )
}
export default NavigationBar;