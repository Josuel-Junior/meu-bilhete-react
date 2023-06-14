import { useEffect, useState } from "react";
import api from "../../components/data/Services/api";
import styles from "./styles.module.css";

import Display from "../../components/layout/data-display/Display";
import Search from "../../components/layout/inputs/Search";
import ResultInformation from "../../components/layout/data-display/resultInformation";

import ContestResult from "../../components/layout/data-display/ContestResult";


export default function Home() {
  const [loading, setLoading] = useState(true);

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

      setLoading(false);
    } catch (error) {
      console.log("concurso nao encontrado");
      console.error(error);
    }
  };

  useEffect(() => {
    const apiURL = `resultado?loteria=megasena&token=upihg25AEZHSRmi&concurso=${contest}`;
    result(apiURL);
  }, [searchConcurso]);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando...</h2>
      </div>
    );
  }



  return (
    <div className={styles.container}>
      <div>
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
          </div>
          <ContestResult
            number={resultGame?.acumulou}
            awardOne={resultGame?.premiacao}
          />
        </div>
        <div className={styles.awardResult}>
          <h2>Premiação</h2>
          <ResultInformation one={resultGame?.premiacao} />
        </div>
      </div>
    </div>
  );
}
