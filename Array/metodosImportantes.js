const pilotos = ['Carlos', 'Ricardo', 'Fernando', 'Eder']
pilotos.pop()

pilotos.push('Elias')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(2,0, 'Leandro', 'Wagner')
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotosUm = pilotos.slice(2)
console.log(algunsPilotosUm)

const algunsPilotosDois = pilotos.slice(1, 4)
console.log(algunsPilotosDois)