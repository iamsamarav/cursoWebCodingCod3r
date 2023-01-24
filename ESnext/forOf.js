for (let letters of "Cod3r"){
    console.log(letters)
}

const Ecma = ['Map', 'Set', 'Promise']
for (let i in Ecma){
    console.log(i)
}
for(let i of Ecma){
    console.log(i)
}

const aboutMap = new Map([
    ['Map', {board: true}],
    ['Set', {board: true}],
    ['Promise', {board: false}]
])
for(let i of aboutMap){
    console.log(i)
}
for (let i of aboutMap.keys()){
    console.log(i)
}
for(let i of aboutMap.values()){
    console.log(i)
}
for(let [keys, values] of aboutMap.entries()){
    console.log(keys,values)
}

const s = new Set(['a', 'b', 'c'])
for(let letters of s){
    console.log(letters)
}