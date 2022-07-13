import Link from 'next/link';
import { useState } from 'react';
import Titulo from '../components/titulo';

export default function() {

    const [valor, setValor] = useState(1);

    const subirValor = cantidad => {
        setValor(valor + cantidad);
    }

    return(
        <div>
            <Titulo titulo="Home" />
            <hr />
            <Link href="/mixto">
                <button type='button'>Ir a mixto</button>
            </Link>
            <hr />
            <h3>{valor}</h3>
            <button type='button' onClick={() => subirValor(1)}> +1 </button>
            <button type='button' onClick={() => subirValor(-1)}> -1 </button>
            
        </div>
    );
}