import "./Header.moddule.css";
import Headerlink from "./HeaderLink/Headerlink";

const Header = () => {
  return (
    <header>
      <h1>Just doIt App</h1>
      <nav>
        <Headerlink text="Home" url="#" />
        <Headerlink text="Status" url="#" />
        <Headerlink text="About" url="#" />
      </nav>
    </header>
  );
};

export default Header;
