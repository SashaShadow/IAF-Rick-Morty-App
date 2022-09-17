import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home">
            <h1>Rick & Morty APP</h1>
            <img src="https://i.gifer.com/WG8Q.gif" alt="Dancing Rick"/>
            <Link to={'/characters/'}>Ingresar al sitio</Link>
        </div>
    )
}

export default Home