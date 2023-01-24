//Middleware pattern (chain of responsability)

const passoUm = (contexto, next) => {
    contexto.valorUm = 'midUm'
    next()
}

const passoDois = (contexto, next) => {
    contexto.valorDois = 'midDois'
    next()
}

const passoTres = contexto => contexto.valorTres = 'midTres'

const exec = (contexto, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length &&
        middlewares[indice](contexto, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const contexto = {}

exec(contexto, passoUm, passoDois, passoTres)

console.log(contexto)