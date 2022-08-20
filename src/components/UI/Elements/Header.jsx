import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <h1>Movies DB</h1><cite>Pour que les films n'aient plus de secrets pour vous !</cite>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"trending"}>Tendances</Link>
        </nav>
    </header>
  )
}

export default Header;