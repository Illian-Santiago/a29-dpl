import { useState, useContext, createContext } from 'react'
import { Bugfender } from '@bugfender/sdk'

Bugfender.init({ appKey: '11PiQrGYJy4z5TVHtBjCNALqv6HiKx0i' })

const contextoApp = createContext()
export const useAppContext = () => useContext(contextoApp)

export function Context({ children }) {
    const [logueado, setLogueado] = useState(false)

    return (
        <contextoApp.Provider value={{ logueado, setLogueado }}>
            {children}
        </contextoApp.Provider>
    )
}