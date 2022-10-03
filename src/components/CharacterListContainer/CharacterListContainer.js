import axios from "axios";
import Character from "../Character/Character";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CharaLC.css"

const CharacterListContainer = () => {

    let charaEndpoint = 'https://rickandmortyapi.com/api/character'

    const [characters, setCharacters] = useState([]);
    let { pageid } = useParams();
    const [page, setPage] = useState(1); 
    const [lastPage, setLastPage] = useState(42);

    useEffect(() => {
        const getLastPage = async () => {
            await axios.get(charaEndpoint)
            .then(data => {
                setLastPage(data.data.info.pages);
            })
        }
        getLastPage();
    }, [lastPage]);

    useEffect(() => {
        if (pageid <= lastPage) {
            setPage(+pageid)
            pageid = null;
        };
    }, [pageid]);

    useEffect(() => {    
        if (page > 1 && page <= lastPage) {
            charaEndpoint = `https://rickandmortyapi.com/api/character?page=${page}`
        }
        const getCharacters = async () => {
            await axios.get(charaEndpoint)
            .then(charas => {
                setCharacters(charas.data.results);
            })
            .catch(err => console.log(err))
        }
        getCharacters();
    }, [page])
    
    

    return (
        <>
            <h1 onClick={() => setPage(1)} className="Title">Rick and Morty APP</h1>
            <h1>Todos los personajes</h1>
            {page > 1 && page < lastPage? 
            <div>
                <h1>Página {page}</h1>
                <div className="Pages">
                    <h1 onClick={() => setPage(page - 1)} className='pageBut Ant'>Página anterior</h1>
                    <h1 onClick={() => setPage(page + 1)} className='pageBut Sig'>Página siguiente</h1>
                </div>
            </div> :
            page == 1 ?
            <div>
                <h1>Página {page}</h1>
                <div className="Pages">
                    <h1 onClick={() => setPage(page + 1)} className='pageBut Sig'>Página siguiente</h1>
                </div>
            </div> :
            <div>
                <h1>Página {page}</h1>
                <div className="Pages">
                    <h1 onClick={() => setPage(page - 1)} className='pageBut Ant'>Página anterior</h1>
                </div>
            </div>}
            <div className="Container">
                {!characters.length ? <h1>Cargando personajes</h1> : 
                characters.map(character => {
                    return <Character key={character.id} charaData={character}/>
                })}

            </div>
        </>
        
    )
}

export default CharacterListContainer;