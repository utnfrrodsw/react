import React, { useState, useEffect } from 'react';
import './MemeFetcher.css'
import axios from 'axios';

const MemeFetcher = () => {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const apiUrl = 'https://api.imgflip.com/get_memes';

    const fetchMemes = async () => {
      setLoading(true);
      setError(null);
      try {
        /** USING FETCH */
        // const response = await fetch(apiUrl, { signal });
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data = await response.json();
        // setMemes(data.data.memes);

        /** USING AXIOS */
        const response = await axios.get(apiUrl, { signal });
        setMemes(response.data.data.memes);
      } catch (err) {
        // if (err.name === 'AbortError') { // check error when using fetch
        if (axios.isCancel(err)) {
          console.log('Fetch aborted!');
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMemes();

    // Función de limpieza para abortar la petición si el componente se desmonta
    return () => {
      console.log('Componente desmontándose, abortando la petición fetch...');
      controller.abort();
    };
  }, []); // El array de dependencias vacío significa que se ejecuta solo al montar y desmontar

  if (loading) {
    return <p>Cargando memes...</p>;
  }

  if (error) {
    return <p>Error al cargar memes: {error}</p>;
  }

  return (
    <div className='meme-fetcher-container'>
      <h2>Lista de Memes</h2>
      <ul>
        {memes.map(meme => (
          <li key={meme.id}>
            {meme.name}
            <img src={meme.url} alt={meme.name} style={{ maxWidth: '200px', maxHeight: '150px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemeFetcher;