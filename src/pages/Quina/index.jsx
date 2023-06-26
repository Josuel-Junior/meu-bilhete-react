import { useEffect, useState } from "react";
import api from "../../data/Services/api";
import styles from './styles.module.css'

import Display from "../../data/components/data-display/Display";
import Search from "../../data/components/inputs/Search";
import ResultInformation from "../../data/components/data-display/ResultInformation";

import ContestResult from "../../data/components/data-display/ContestResult";

import ValidadeContest from "../../data/Services/validateContest";
import Preloader from "../../data/components/data-display/Preloader";


export default function Quina() {
    const [loading, setLoading] = useState(true);

    const [resultGame, setResultGame] = useState("");

    const [contest, setContest] = useState("");
    const [searchConcurso, setSearchConcurso] = useState("");

    const result = async (contest) => {
        setLoading(true);
        try {
            const response = await api.get(contest);

            setResultGame(response.data);

            setLoading(false);
        } catch (error) {
            console.log("concurso nao encontrado");
            console.error(error.response.data);
        }
        setLoading(false);
        console.log(resultGame)
    };

    useEffect(() => {
        result(ValidadeContest(contest, resultGame, 'quina'))
    }, [searchConcurso]);


    if (loading) {
        return (
            <Preloader />
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
                    <h2>Quina / Concurso {resultGame?.concurso}</h2>
                    <div className={styles.result}>
                        {resultGame.dezenas.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Display number={item} />
                                </div>
                            );
                        })}
                    </div>
                    <ContestResult
                        number={resultGame.acumulou}
                        awardOne={resultGame.premiacoes}
                    />
                </div>
                <div className={styles.awardResult}>
                    <h2>Premiação</h2>
                    <ResultInformation one={resultGame.premiacoes} />
                </div>
            </div>
        </div>
    )
}