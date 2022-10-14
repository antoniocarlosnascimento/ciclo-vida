import { useEffect, useState } from "react";
import { Movie } from "./types/Movie";

const App = () => {

  useEffect(() => {loadMovies()}, []);
  
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  
  const loadMovies = async () => {
    try {
      setLoading(true);
        const filmesResponse = fetch('https://api.b7web.com.br/cinema/');
        const filmesJson = await (await filmesResponse).json();
      setLoading(false);

      setMovies(filmesJson);

    } catch (error) {
      setLoading(false);
      setMovies([]);
    }
  }

  return (
    <div>
      <button onClick={loadMovies}>Carregar filmes</button>

      { loading && <p>Loading....</p> } 
      { !loading && movies.length === 0 && <p>Ocorreu um erro interno, tente novamente mais tarde!</p> } 

      { !loading && movies.length > 0 && 
        <>
          <p>Total de filmes: {movies.length}</p> 

          <ul>
            {movies.map((item, index) => (
              <li key={index}>
                <h3>{item.titulo}</h3>
                <img src={item.avatar} alt="avatar" />
              </li>
            ))}
          </ul>
        </>
      }
      
    </div>
  )
}

export default App; 