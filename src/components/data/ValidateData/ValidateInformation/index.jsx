import numeral from "numeral"


export default function ValidateInformation(props) {
    const information = props.validateWinners;

    console.log(information)

    return (
        <div>
            <span>{information.vencedores > 1 ? `${information.vencedores} Ganhadores R$ ${information.premio}`
                : information.vencedores > 0 ? `${information.vencedores} Ganhador  R$ ${information.premio}`
                    : "Não houve ganhadores"} </span>

        </div>
    )
}