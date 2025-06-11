import './MemeFetcher.css'
import useFetch from './hooks/useFetch';

const MemeFetcherV2 = () => {
  
  const { loading, error, data: memes} = useFetch('https://api.imgflip.com/get_memes');

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
        {memes.data.memes.map(meme => (
          <li key={meme.id}>
            {meme.name}
            <img src={meme.url} alt={meme.name} style={{ maxWidth: '200px', maxHeight: '150px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemeFetcherV2;