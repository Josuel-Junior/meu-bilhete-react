import { useEffect, useState } from "react";
import api from "../../services/api";
import styles from "./styles.module.css";

import Display from "../../components/layout/data-display/Display";
import Search from "../../components/layout/inputs/Search";
import ResultInformation from "../../components/layout/data-display/resultInformation";

export default function Home() {
  const [resultGame, setResultGame] = useState();

  const [contest, setContest] = useState("");
  const [searchConcurso, setSearchConcurso] = useState("");

  // const handChange = (event) => {
  //   event.preventDefault();

  //   // if (!contest) return;

  //   setSearchConcurso(contest);
  // };

  const result = async (contest) => {
    try {
      const response = await api.get(contest);

      setResultGame(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("concurso nao encontrado");
      console.error(error);
    }
  };

  useEffect(() => {
    const apiURL = `resultado?loteria=megasena&token=upihg25AEZHSRmi&concurso=${contest}`;
    result(apiURL);
  }, [searchConcurso]);

  return (
    <div className={styles.container}>
      <div>
        {/* <form onSubmit={handChange}>
          <input
            type="text"
            onChange={(e) => setContest(e.target.value)}
            value={contest}
          />
          <p>{contest}</p>
          <button type="submit">Buscar</button>
        </form> */}
        <Search
          contest={contest}
          setContest={setContest}
          setSearchConcurso={setSearchConcurso}
        />
      </div>
      <div className={styles.resultMain}>
        <div className={styles.resultNumber}>
          <h2>Mega-Sena / Concurso {resultGame?.numero_concurso}</h2>
          <div className={styles.result}>
            {resultGame?.dezenas.map((item, index) => {
              return (
                <div key={index}>
                  <Display number={item} />
                </div>
              );
            })}


             {/* Criar componente para esses dados */}
          </div>
            <ResultInformation number={resultGame.acumulou}/>
        </div>
        <div className={styles.awardResult}>
          <h2>teste2</h2>
          {/* Criar componente para esses dados */}
        </div>
      </div>
    </div>
  );
}
