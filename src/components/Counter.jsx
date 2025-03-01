import React, { useState } from 'react'
import { Bugfender } from '@bugfender/sdk'
import { useAppContext } from '../providers/Context'

const Counter = () => {
    const [count, setCount] = useState(0)
    const { logueado } = useAppContext()

    if (!logueado) {
        return <p>Por favor logueate para usar el contador</p>
    }

    const incrementar = () => {
        count < 10
            ? (Bugfender.info('Valor incrementado'), setCount(count + 1))
            : Bugfender.error('El contador ha llegado a su nivel maximo')
    }

    const decrementar = () => {
        count > 0
            ? (Bugfender.info('Valor decrementado'), setCount(count - 1))
            : Bugfender.error('El contador ha llegado a su nivel mínimo')
    }

    return (
        <div className='flex flex-col items-center p-4 border rounded-lg shadow-lg w-64'>
            <h2 className='text-xl font-bold mb-2'>Contador: {count}</h2>

            <div className='flex gap-4'>
                <button className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700' onClick={incrementar}>+</button>
                <button className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700' onClick={decrementar}>-</button>
            </div>
        </div>
    )
}

export default Counter