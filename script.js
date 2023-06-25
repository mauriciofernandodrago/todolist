const localStorageKey = 'to-do-list'

function newTask(){
    let input = document.getElementById('input-new-task')
    
    if(!input.value){
        alert('digite algo para inserir na lista')
    }
    else{
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
}
function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++){
        list.innerHTML = `<li>${values[i]['name']}</li>`
    }
}