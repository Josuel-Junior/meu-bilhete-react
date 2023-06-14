import numeral from "numeral"


export default function ValidateInformation(props) {
    const information = props.validateWinners;

    return (
        <div>
            <span>{information.quantidade_ganhadores > 1 ? `${information.quantidade_ganhadores} Ganhadores R$ ${numeral(information.valor_total).format("$0,0.00")}`
                : information.quantidade_ganhadores > 0 ? `${information.quantidade_ganhadores} Ganhador R$ ${numeral(information.valor_total).format("$0,0.00")}`
                    : "Não houve ganhadores"} </span>

        </div>
    )
}