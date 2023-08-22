import numeral from "numeral"



export default function validateResu(info) {
    let validate = ''

    if (info.ganhadores > 1) {
        validate = `${numeral(info.ganhadores).format('0,0')} Ganhadores ${numeral(info.valorPremio).format('$0,0.00')}`
    }
    else if (info.ganhadores > 0) {
        validate = `${info.ganhadores} Ganhador R$ ${numeral(info.valorPremio).format('$0,0.00')}`
    }
    else {
        validate = "Não houve ganhadores"
    }

    return validate
}