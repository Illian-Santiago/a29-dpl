import './App.css'
import Counter from './components/Counter'
import { Bugfender } from '@bugfender/sdk'
import Login from './components/Login'
import PokemonGalery from './components/PokemonGalery'
import { useState } from 'react'

Bugfender.init({ appKey: '11PiQrGYJy4z5TVHtBjCNALqv6HiKx0i' })

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Login setIsLoggedIn={setIsLoggedIn} />
      <Counter isLoggedIn={isLoggedIn} />
      <PokemonGalery isLoggedIn={isLoggedIn} />
    </>
  )
}