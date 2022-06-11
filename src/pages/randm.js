import styles from "../styles/Home.module.css"

const rickandmortylist = ({ results, error }) => {
    return (
      <div className={styles.main}>
        <h1  >Rick and Morty</h1>
        <div className={styles.container}>
          {results.map((data, index) => (
            <div key={data.name} className={styles.firstdiv}>
              <img
                
                src={`https://rickandmortyapi.com/api/character/avatar/${
                    index + 1
                  }.jpeg`}
                alt={data.name}
              />
              <div className={styles.detail}>
                <h3 >Nombre: {data.name}</h3>
                <h3> Estado: {data.status}</h3>
                <h3 >Especie: {data.species}</h3>
                <h3 >Genero: {data.gender}</h3>
                <h3 >Locación: {data.location.name}</h3>

              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  rickandmortylist.getInitialProps = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
  
      return {
        results: data.results,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  };
  
  export default rickandmortylist;