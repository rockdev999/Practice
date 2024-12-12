import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div>
      <Link to="/form-login">Form Login</Link>
      <Link to="/form-register">Form Register</Link>
    </div>
  );
};
