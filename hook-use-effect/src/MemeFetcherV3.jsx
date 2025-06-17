import './MemeFetcher.css'
import useMemes from './hooks/useQuery';

const MemeFetcherV3 = () => {
  
  const { error, isError, isLoading, memes} = useMemes();

  if (isLoading) {
    return <p>Cargando memes...</p>;
  }

  if (isError) {
    return <p>Error al cargar memes: {error.message}</p>;
  }

  if (!memes || memes.length === 0) {
    return <p>No se encontraron memes.</p>;
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

export default MemeFetcherV3;