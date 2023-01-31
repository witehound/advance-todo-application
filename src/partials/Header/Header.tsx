import "./Header.moddule.css";
import Headerlink from "./HeaderLink/Headerlink";

const Header = () => {
  return (
    <header>
      <h1>Todo App</h1>
      <nav>
        <Headerlink text="Home" />
        <Headerlink text="Status" />
        <Headerlink text="About" />
      </nav>
    </header>
  );
};

export default Header;
