import { Link } from "react-router-dom";
import style from "./menu.module.scss";
import { useState } from "react";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const controlMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={controlMenu} className={style.menu}>
      <p> </p>
      <p> </p>
      <p> </p>

      {isOpen && (
        <nav className={style.nav}>
          <Link to="/">Home</Link>
          <Link to="/voluntario">Voluntário</Link>
        </nav>
      )}
    </div>
  );
};

export default Menu;
