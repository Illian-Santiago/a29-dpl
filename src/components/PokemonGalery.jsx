import { useEffect, useState } from "react";

export default function PokemonGalery() {
    const [pokemons, setPokemons] = useState([]);

    const getPersonajes = async () => {
        try {
            const respuestaApi = await fetch("https://pokeapi.com/api/v2/pokemon?limit=10");
            const data = await respuestaApi.json();
            setPokemons(data.results);
        } catch (error) {
            alert('Error al obtener los pokemons');
            console.error(error);
        }
    };

    useEffect(() => {
        getPersonajes();
    }, []);

    return (
        <div className="grid">
            {pokemons.length > 0 ? (
                pokemons.map((pokemon, index) => (
                    <div className="card" key={index}>
                        <h2 className="text-lg font-semibold">{pokemon.name}</h2>
                    </div>
                ))
            ) : (
                <p>Cargando pokemons...</p> // Mensaje mientras se cargan los datos
            )}
        </div>
    );
}