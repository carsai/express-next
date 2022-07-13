import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import Titulo from '../components/titulo';

export default function home() {
  const [valor, setValor] = useState(1);

  const [api, setApi] = useState('');

  const subirValor = (cantidad) => {
    setValor(valor + cantidad);
  };

  useEffect(() => {
    fetch('/api/awe').then((resp) => resp.json()).then((json) => setApi(JSON.stringify(json)));
  }, []);

  return (
    <div>
      <Titulo titulo="Home" />
      <hr />
      <Link href="/mixto">
        <button type="button">Ir a mixto</button>
      </Link>
      <hr />
      <h3>{valor}</h3>
      <button type="button" onClick={() => subirValor(1)}> +1 </button>
      <button type="button" onClick={() => subirValor(-1)}> -1 </button>
      <hr />
      <h3>Valor Api</h3>
      <pre>{api}</pre>

    </div>
  );
}
