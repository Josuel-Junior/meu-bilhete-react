export default function ValidateContest(contest, currentContest, game) {
    let validate = ''

    if (contest != '' && contest > 0 && contest < currentContest.concurso) {
        validate = `${game}/${contest}`

    } else {
        validate = `${game}/latest`
    }

    return validate
}