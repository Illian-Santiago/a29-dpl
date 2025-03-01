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
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="nombre@ejemplo.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={loguearse}>Iniciar sesión</button>
        </div>
    )
}

export default Login