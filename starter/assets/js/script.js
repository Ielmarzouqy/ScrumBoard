/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
// alert("test");

let form = document.getElementById("modal-task");
let TaskInput = document.getElementById("recipient-name");
let DateInput = document.getElementById("DateInput");
let textarea = document.getElementById("message-text");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");


 
 form.addEventListener("submit", (e)=>{
    e.preventDefault();
    formValidation();
});

let formValidation = ()=>{

    if(TaskInput.value === ""){
        console.log('failure');
        msg.innerHTML = "no task here";
    } else{
        console.log('success');
        msg.innerHTML = "";
        acceptData();
    }
};

let data = {};
let acceptData = () => {
    data["text"] = TaskInput.value;
    data["date"] = DateInput.value;
    data["discription"] = textarea.value;

    console.log(data);
};

let createTask = () => {
tasks.innerHTML = "your tasks here ";

};

// function save(){
//     alert("button save is good");
// }








































 function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form

}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks

}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks

}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}