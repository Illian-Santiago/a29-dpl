import React, { useState, useEffect } from 'react'
import { Bugfender } from '@bugfender/sdk'
import { useAppContext } from '../providers/Context'

const PokemonGalery = () => {
    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState(true);
    const { logueado } = useAppContext()

    useEffect(() => {
        if (logueado) {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
                .then(response => response.json())
                .then(data => {
                    setPokemons(data.results);
                    setLoading(false);
                    Bugfender.log('API call successful', data)
                })
                .catch(error => {
                    alert('Error al obtener los pokemons');
                    console.error(error);
                    Bugfender.error('API call failed', error)
                });
        }
    }, [logueado])

    if (!logueado) {
        return <p>Por favor logueate para usar el contador</p>
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid">
            {pokemons.map(pokemon => (
                <div className="card" key={pokemon.name}>
                    <h2 className="text-lg font-semibold">{pokemon.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default PokemonGalery