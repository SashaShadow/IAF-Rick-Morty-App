import "./Character.css";
import { Link } from "react-router-dom";

const Character = ({charaData}) => {
    return (
        <div className="Character">
            <p>{charaData.name}</p>
            <img src={charaData.image}/>
            <Link to={`/character/${charaData.id}`}>Ver detalles del personaje</Link>
        </div>
    )
}

export default Character;