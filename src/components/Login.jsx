import React, { useState } from 'react'
import { Bugfender } from '@bugfender/sdk'
import { useAppContext } from '../providers/Context'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setLogueado } = useAppContext()

    function loguearse() {
        Bugfender.log(`Logueado con el email: ${email}`)
        setLogueado(true)
    }

    return (
        <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-64 bg-white">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Login</h2>
            <input
                type="email"
                placeholder="nombre@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-2 p-2 border rounded-lg w-full"
            />
            <input
                type="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 p-2 border rounded-lg w-full"
            />
            <button
                onClick={loguearse}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
            >
                Iniciar sesión
            </button>
        </div>
    )
}

export default Login