export default function ValidateContest(contest, currentContest) {
    let validate = ''

    if (contest != '' && contest > 0 && contest < currentContest.concurso) {
        validate = `mega-sena/${contest}`

    } else {
        validate = 'mega-sena/latest'
    }

    return validate
}