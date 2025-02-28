import { useEffect, useState } from "react";
import { Bugfender } from '@bugfender/sdk';

export default function PokemonGalery({ isLoggedIn }) {
    const [pokemon, setPokemons] = useState([]);

    const getPersonajes = async () => {
        try {
            const respuestaApi = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
            const data = await respuestaApi.json();
            setPokemons(data);
            Bugfender.log('API call successful', data);
        } catch (error) {
            alert('Error al obtener los pokemons');
            console.error(error);
            Bugfender.error('API call failed', error);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            getPersonajes();
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return <p>Please log in to view the Pokemon gallery.</p>;
    }

    return (
        <div className="grid">
            <div className="card">
                <h2 className="text-lg font-semibold">{pokemon.name}</h2>
            </div>
        </div>
    );
}