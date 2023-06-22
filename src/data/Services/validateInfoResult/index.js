export default function validateResu(info) {
    let validate = ''
    if (info.vencedores > 1) {
        validate = `${info.vencedores} Ganhadores R$ ${info.premio}`
    }
    else if (info.vencedores > 0) {
        validate = `${info.vencedores} Ganhador R$ ${info.premio}`
    }
    else {
        validate = "Não houve ganhadores"
    }

    return validate
}