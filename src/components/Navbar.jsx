import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
// useLocation: batata hai currently kaunsa page khula hai
// isse hum active link highlight kar sakte hain

function Navbar() {
  const location = useLocation(); // current path milega jaise "/" ya "/add"

  // Helper: agar current path match kare toh "active" class lagao
  function isActive(path) {
    return location.pathname === path ? "nav-link active" : "nav-link";
  }

  return (
      <nav className="navbar">
      <div className="nav-brand">
      <img src={logo} alt="FreshGuard Logo" className="logo" />
      <span>FreshGuard</span>
      </div>
      <div className="nav-links">
        <Link to="/" className={isActive("/")}>Home</Link>
        <Link to="/add" className={isActive("/add")}>+ Add Food</Link>
        <Link to="/alerts" className={isActive("/alerts")}>Alerts</Link>
        <Link to="/search" className={isActive("/search")}>Search</Link>
        <Link to="/settings" className={isActive("/settings")}>Settings</Link>
      </div>
    </nav>
  );
}

export default Navbar;