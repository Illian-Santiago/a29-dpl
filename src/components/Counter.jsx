import { useState } from 'react';
import { Bugfender } from '@bugfender/sdk';

Bugfender.init({
    appKey: '11PiQrGYJy4z5TVHtBjCNALqv6HiKx0i',
    // overrideConsoleMethods: true,
    // printToConsole: true,
    // registerErrorHandler: true,
    // logBrowserEvents: true,
    // logUIEvents: true,
    // version: '',
    // build: '',
});

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        Bugfender.info('Valor incrementado');
        setCount(count + 1);
    };
    const decrement = () => {
        Bugfender.info('Valor decrementado');
        setCount(count - 1);
    };

    if (count >= 10) {
        Bugfender.error('El contador ha llegado a su nivel maximo');
    }

    if (count < 0) {
        Bugfender.error('El contador no puede pasar de 0');
    }

    return (
        <div className='flex flex-col items-center p-4 border rounded-lg shadow-lg w-64'>
            <h2 className='text-xl font-bold mb-2'>Contador: {count}</h2>

            <div className='flex gap-4'>
                <button className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700' onClick={increment}>+</button>
                <button className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700' onClick={decrement}>-</button>
            </div>
        </div>
    );
};

export default Counter;