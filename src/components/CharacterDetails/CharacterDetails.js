import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./CharacterDetails.css";

const CharacterDetails = () => {

    const { id } = useParams();
    const [character, setCharacter] = useState([]);
    const [loader, setLoader] = useState(true);
    const charaEndpoint = 'https://rickandmortyapi.com/api/character/';
    
    const pageFinder = () => {
        return Math.ceil(id / 20);
    }

    useEffect(() => {
        const getData = async () => {
            await axios.get(`${charaEndpoint}${id}`)
            .then(chara => {
                setCharacter(chara.data)
                setLoader(false);
            })
            .catch(err => console.log(err));
        }
        getData();
    }, [id])

    return (
        <>
            <Link to={`/characters/${pageFinder()}`} className="Volver">Volver al listado de personajes</Link>
            {loader ? <h1>Cargando personaje...</h1> :
             <div className="CharaDetails">
             <img src={character?.image}/>
                 <div className="CharaInfo">
                     <h1>Nombre: {character.name}</h1>
                     <h1>Estado: {character.status}</h1>
                     <h1>Especie: {character.species}</h1>
                     {character.type ?  <h1>Tipo: {character.type}</h1> : null}
                     <h1>Genero: {character.gender}</h1>
                     <h1>Lugar de origen: {character?.origin?.name}</h1>
                     <h1>Ubicacion actual: {character?.location?.name}</h1>
                     <h1>Aparece en los episodios: {character?.episode?.map(ep => {
                            return ep.slice(40);
                        }).join(", ")}
                    </h1>
                 </div>
             </div>
            }
           
        </>
        
    )
}

export default CharacterDetails;