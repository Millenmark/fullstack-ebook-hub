import style from "./Navbar.module.css"
import { Link } from "react-router-dom"
import { Container } from "../../UI";

const Navbar = () => {
  return (
    <Container className={style.navHeader}>
      <h1><Link to="/">eBook Hub</Link></h1>
      <nav>
        <ul>
          <li>
            <Link to="/add">Create Book</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Navbar