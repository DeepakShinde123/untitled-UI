import { Link } from "react-router-dom";
function Header() {
  return  <header className="mb-8 flex-items-center gap-2">
    <Link to={"/"}>
      <img src="favicon.ico"
      alt="logo"
      className="w-10 h-10 rounded-full"
    />
    </Link>
 
    
    <p className="font semibold text-2xl">
      Untitled Contact
    </p>
  </header>;
}

export default Header;