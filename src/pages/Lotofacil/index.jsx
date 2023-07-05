import { useEffect, useState } from "react";

import { useReactToPrint } from "react-to-print";
import { useRef } from "react";



import api from "../../data/Services/api";
import styles from '../Home/styles.module.css'

import Display from "../../data/components/data-display/Display";
import Search from "../../data/components/inputs/Search";
import ResultInformation from "../../data/components/data-display/ResultInformation";

import ContestResult from "../../data/components/data-display/ContestResult";

import ValidadeContest from "../../data/Services/validateContest";
import Preloader from "../../data/components/data-display/Preloader";

import Buttons from "../../data/components/Buttons";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classnames from 'classnames'



export default function Home() {


    const conponentPDF = useRef();
    const [loading, setLoading] = useState(true);

    const [resultGame, setResultGame] = useState("");

    const [contest, setContest] = useState("");


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
    };

    useEffect(() => {
        result(ValidadeContest(contest, resultGame, 'lotofacil'))
    }, []);

    function fnSearch() {
        result(ValidadeContest(contest, resultGame, 'lotofacil'))
    }

    const generationPDF = useReactToPrint({
        content: () => conponentPDF.current,
        documentTitle: "Userdata",
        onAfterPrint: () => toast.success("PDF Salvo com sucesso")

    });

    if (loading) {
        return (
            <Preloader />
        );
    }


    return (
        <div className={styles.container}>

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
                    <h2>Lotofacil / Concurso {resultGame?.concurso}</h2>
                    <div className={classnames(styles.result, styles.fiveColumns, classnames)}>
                        {resultGame.dezenas.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Display number={item} color={'#a12da9'} />
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
                    <ResultInformation infoGame={resultGame.premiacoes} />
                </div>
            </div>
        </div>
    );
}
