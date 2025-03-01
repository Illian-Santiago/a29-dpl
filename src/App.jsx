import './App.css'
import Login from './components/Login'
import Counter from './components/Counter'
import PokemonGalery from './components/PokemonGalery'
import { Context } from './providers/Context'

export default function App() {
  return (
    <Context>
      <Login />
      <Counter />
      <PokemonGalery />
    </Context>
  )
}