const schedule = require('node-schedule')

const tarefaUm = schedule.scheduleJob('*/5 * 20 * * 2', function (){
    console.log('Executando Tarefa 1:', new Date().getSeconds())
})

setTimeout(function(){
    tarefaUm.cancel()
    console.log('Cancelando Tarefa ')
}, 20000)

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 20
regra.second = 30

const tarefaDois = schedule.scheduleJob(regra, function(){
    console.log("Executando Tarefa 2: ", new Date().getSeconds())
})