import "./App.css";
import { useFetch } from "./logic/useFetch";

function App() {
  const url = "https://api-don-ar.vercel.app/fundaciones";
  const {data, loading, error} = useFetch(url);
  const fundaciones = data ? data.list : [];
  console.log("Data: " + data);
  console.log("\n\n\nData.list: " + data.list)
  return (
    <div className="App">
      <h1>Arquitectura de 3 capas</h1>
      <h2>Fundaciones</h2>
      <div className="fundaciones__container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error while loading organizations {error}</p>
        ) : (
          fundaciones.map((fundacion) => (
            <div className="fundacion">
              <h3>{fundacion.titulo}</h3>
              <p>{fundacion.descripcion}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
