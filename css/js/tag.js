const colors = {
    p: 'blue',
    div: 'pink',
    span: 'red',
    section: 'green',
    ul: 'yellow',
    ol: 'black',
    header: 'orange',
    nav: 'gray',
    main: 'purple',
    footer: 'brown',
    form: 'plum',
    body: 'magenta',
    padrao: 'aqua',

    get(tag){
        return this[tag] ? this[tag] : this.padrao
    }
}

document.querySelectorAll('.tag').forEach(elemento =>{
    const tagName = elemento.tagName.toLowerCase()

    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
})