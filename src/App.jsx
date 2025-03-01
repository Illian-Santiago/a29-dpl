import './App.css'
import Login from './components/Login.jsx'
import Counter from './components/Counter.jsx'
import PokemonGalery from './components/PokemonGalery.jsx'
import { Context } from './providers/Context.jsx'

export default function App() {
  return (
    <Context>
      <Login />
      <Counter />
      <PokemonGalery />
    </Context>
  )
}