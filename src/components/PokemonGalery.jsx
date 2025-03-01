import React, { useState, useEffect } from 'react'
import { Bugfender } from '@bugfender/sdk'
import { useAppContext } from '../providers/Context'

const PokemonGalery = () => {
    const [pokemons, setPokemons] = useState([])
    const { logueado } = useAppContext()

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(data => {
                setPokemons(data.results)
                Bugfender.log('Obtencion de datos correctamente:', data)
            })
            .catch(error => {
                Bugfender.error('Error al obtener los pokemons', error)
            })
    }, [logueado])

    if (!logueado) {
        return <p>Por favor logueate para ver los nombres de los pokemons</p>
    }

    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            {pokemons.map(pokemon => (
                <div className="card bg-white p-4 rounded-lg shadow-md" key={pokemon.name}>
                    <h2 className="text-lg font-semibold text-gray-800">{pokemon.name}</h2>
                </div>
            ))}
        </div>
    )
}

export default PokemonGalery