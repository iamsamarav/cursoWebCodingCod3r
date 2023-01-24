function talkAfter(seconds, phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase)
        }, seconds * 1000)
    })
}

talkAfter(3, 'Very good')
    .then(phrase => phrase.concat('?!?'))
    .then(outraPhrase => console.log(outraPhrase))
    .catch(e => console.log(e))