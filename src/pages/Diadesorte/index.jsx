import { useEffect, useState, useRef } from "react";
import api from "../../data/Services/api";
import styles from '../Home/styles.module.css'

import Display from "../../data/components/data-display/Display";
import Search from "../../data/components/inputs/Search";
import ResultInformation from "../../data/components/data-display/ResultInformation";

import ContestResult from "../../data/components/data-display/ContestResult";

import ValidadeContest from "../../data/Services/validateContest";
import Preloader from "../../data/components/data-display/Preloader";

import Buttons from "../../data/components/Buttons";


import { useReactToPrint } from "react-to-print";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import classnames from 'classnames'

export default function Quina() {
    const [loading, setLoading] = useState(true);

    const [resultGame, setResultGame] = useState("");

    const [contest, setContest] = useState("");

    const conponentPDF = useRef();


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
        result(ValidadeContest(contest, resultGame, 'diadesorte'))
    }, []);

    function fnSearch() {
        result(ValidadeContest(contest, resultGame, 'diadesorte'))
    }

    const generationPDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "Resultado",
        onAfterPrint: () => toast.success("PDF Salvo com sucesso")

    });



    if (loading) {
        return (
            <Preloader />
        );
    }




    return (
        <section className={styles.container}>

            <Buttons generation={generationPDF} />
            <ToastContainer autoClose={1000} />
            <div>
                <Search
                    contest={contest}
                    setContest={setContest}
                    fnSearch={fnSearch}
                />
            </div>
            <div className={styles.resultMain} ref={conponentPDF}>
                <div className={styles.resultNumber}>
                    <h2>Dia de Sorte / Concurso {resultGame.concurso}</h2>
                    <div className={classnames(styles.result, styles.sevenColumns, classnames)}>
                        {resultGame?.dezenas.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Display number={item} color={'#d3b315'} />
                                </div>
                            );
                        })}
                    </div>
                    <ContestResult
                        resultContest={resultGame.acumulou}
                        result={resultGame.premiacoes}
                    />
                </div>
                <div className={styles.awardResult}>
                    <h3>Premiação</h3>
                    <p>Mês da Sorte: <span className={styles.month}>{resultGame.mesSorte}</span> </p>
                    <ResultInformation infoGame={resultGame.premiacoes} />
                </div>
            </div>
        </section>
    )
}