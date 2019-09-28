document.getElementById('formTask').addEventListener('submit',saveTasks);

function saveTasks(e){ //e recibe un evento 
    let title = document.getElementById('title').value
    let description = document.getElementById('description').value
    let task = {
        title, //title: title
        description //description: description
    }
    //Guardar en local storage
    if(localStorage.getItem('tasks') === null){
        let tasks = []
        tasks.push(task)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
    else{
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        tasks.push(task)
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
    getTasks()
    document.getElementById('formTask').reset()
    e.preventDefault() 
}
function deleteTask(title){
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    console.log(title)
    console.log(tasks.length)
    for(let i = 0 ; i < tasks.length ; i++){
        if(tasks[i].title == title){
            tasks.splice(i,1)
        }
    }
    localStorage.setItem('tasks',JSON.stringify(tasks))
    getTasks()
}
function getTasks(){
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    let taskView = document.getElementById('taskView')
    taskView.innerHTML = ''
    for(let i = 0 ; i < tasks.length ; i++){
        let title = tasks[i].title
        let description = tasks[i].description
        taskView.innerHTML += `
        <div class='card mb-4'> 
            <div class='card-body'>
                <h2> ${title} </h2>
                <p>  ${description} </p>
                <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger">Eliminar</a> 
            <div>
        <div>
        `
    }
}
getTasks()
