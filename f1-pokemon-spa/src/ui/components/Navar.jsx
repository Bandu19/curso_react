import { Link, NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  //NAVEGACIÓN ==> HOOKS ===> useNavigate
  /** Ofrece a que tambien limpie el localStorage
   */

  const navigete = useNavigate();

  const handleLogout = () => {
    navigete("/dc", {
      replace: true,
    });
  };

  /** */

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {/* ?? ==> isActive */}
          <NavLink
            // SI "isActive" esta en true, que si estsa en esa carpeta o no.
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/pokemons"
          >
            POKEMONES
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-primary">Oscar</span>
          <button
            //
            className="nav-item nav-link btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
