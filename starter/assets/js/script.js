/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
// function save(){
//     alert("button save is good");
// }

compt=0;

let toDoTask = document.getElementById("to-do-tasks");
let inProgressTask = document.getElementById("in-progress-tasks");
let doneTask = document.getElementById("done-tasks");


let form = document.getElementById("modal-task");
let title = document.getElementById("title");
let date = document.getElementById("date");
let description = document.getElementById("description");
let priority_select = document.getElementById("priority");
let status_select = document.getElementById("status");
let typeFeature = document.getElementById("typeF");
let typeBug = document.getElementById("typeB");

afficher();

function afficher(){

    let toDo = 0;
    let inProgress = 0;
    let done = 0;

    toDoTask.innerHTML = "";
    inProgressTask.innerHTML = "";
    doneTask.innerHTML= "";

    for (let i=0;i< tasks.length ; i++){
        compt = i+1;
        if(tasks[i].status == "To Do" ){
            toDoTask.innerHTML +=`
                            <button class="task p-3 border-0 text-white bg-none mt-2 col-12 d-flex">
								<div class="">
									<i class="bi bi-question-circle-fill text-success me-2"></i> 
 								</div>
 								<div class="text-start">
									<div class="text-white"> ${tasks[i]["title"]}</div>
									<div class="">
										<div class="">#${compt}  ${tasks[i]["date"]}</div>
 										<div class="" title=" and details in the main/primary description of a tas."> ${tasks[i].description.slice(1,55)}...</div>
 									</div>
 									<div class="mt-2 ms-4">
 										<span class="btn"> ${tasks[i]["priority"]}</span>
 										<span class="btn2">${tasks[i]["type"]}</span>
									</div>
 								</div>
 							</button>`;
           toDo++;
        }else if(tasks[i].status == "In Progress" ){

            inProgressTask.innerHTML +=`
                             <button class="task p-3 border-0 text-white bg-none mt-2 col-12 d-flex">
								<div class="">
                                <i class="spinner-border  spinner-border-sm  text-success me-2"></i> 
								</div>
								<div class="text-start">
									<div class="text-white"> ${tasks[i]["title"]}</div>
									<div class="">
										<div class="">#${compt}  ${tasks[i]["date"]}</div>
										<div class="" title=" and details in the main/primary description of a tas.">${tasks[i].description.slice(1,55)}...</div>
									</div>
									<div class="mt-2 ms-4">
										<span class="btn"> ${tasks[i]["priority"]}</span>
										<span class="btn2">${tasks[i]["type"]}</span>
									</div>
								</div>
							</button>`;
                           
                            inProgress++;
                        
        } else if (tasks[i].status == "Done") {

            doneTask.innerHTML +=`
                             <button class="task p-3 border-0 text-white bg-none mt-2 col-12 d-flex">
								<div class="">
                                <i class="bi bi-check-circle  text-success me-2"></i> 
								</div>
								<div class="text-start">
									<div class="text-white"> ${tasks[i]["title"]}</div>
									<div class="">
										<div class="">#${compt}  ${tasks[i]["date"]}</div>
										<div class="" title=" and details in the main/primary description of a tas."> ${tasks[i].description.slice(1,55)}...</div>
									</div>
									<div class="mt-2 ms-4">
										<span class="btn"> ${tasks[i]["priority"]}</span>
										<span class="btn2">${tasks[i]["type"]}</span>
									</div>
								</div>
							</button>`;
                           
                            done++;
        }     
                        

}
};

function createTask() {
//     // initialiser task form

//     // Afficher le boutton save

//     // Ouvrir modal form

 }

function saveTask() {
    // Recuperer task attributes a partir les champs input ET Créez task object
    let task_type;
    if(typeBug.checked){
        task_type = 'Bug';
    }else{
        task_type = 'Feature';
    }
    task = {
        'id'            :   tasks.length+1,
        'title'         :   title.value,
        'type'          :   task_type,
        'priority'      :   priority_select.value,
        'status'        :   status_select.value,
        'date'          :   date.value,
        'description'   :   description.value,
    }
    // Ajoutez object au Array
    tasks.push(task);
    // refresh tasks
    initTaskForm();
    afficher();
    clearInput();
}
 
// clear inputs
function clearInput(){
    title.value = '';
    priority_select.value ='';
    status_select.value ='';
    date.value = '';
    description.value = '';
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
    let tasks_to_delete = document.querySelectorAll('.task');
    for(let t of tasks_to_delete){
        t.remove();
    }
    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}



let msg = document.getElementById("msg");

const typeInput = document.getElementsByName("type");
var type_value;
    for (var i = 0; i < typeInput.length; i++) {
        if (typeInput[i].checked) {
            type_value = typeInput[i].value;
        }
    }
// let tasks = document.getElementById("tasks");
console.log(tasks);
 
 form.addEventListener("submit", (e)=>{
    e.preventDefault();
    formValidation();
});

let formValidation = ()=>{

    if((title.value === "") && (type.value === "")&& (Status.value === "")&& (priority.value === "") && (date.value === "")&& (description.value === "") ){
        console.log('failure');
        msg.innerHTML = "NO TASK HERE";
    } else{
        console.log('success');
        msg.innerHTML = "";
    }
};


//     const changeSelected = (e) => {
//     const $select = document.querySelector('#Priority');
//     $select.value = ''
//   };
  
//   document.querySelector('.changeSelected').addEventListener('click', changeSelected);

//  let data = {};
//  let acceptData = () => {
//      data["title"] = title.value;
//     //  data["typeInput"] = type_value;
//      data["status"]= Status.value;
//      data["priority"] = priority.value;
//      data["date"] = date.value;
//      data["description"] = description.value;

//      console.log('data');
//  }
//     data["date"] = DateInput.value;
//     data["discription"] = textarea.value;

    // createTask();
// };

// let createTask = () => {
// tasks.innerHTML += `
// <button class="p-3 border-0 text-white bg-none mt-2 col-12 d-flex">
//     <div class="">
//         <i class="spinner-border  spinner-border-sm  text-success me-2"></i> 
//     </div>
//     <div class="text-start">
//         <div class="text-white">${data.text}</div>
//         <div class="">
//             <div class="">${data.date}</div>
//             <div class="" title="as investigating those is usually the first step to take in resolving the problem.">${data.discription}</div>
//         </div>
//         <div class="mt-2 ms-4">
//             <span class="btn">High</span>
//             <span class="btn2">Bug</span>
//         </div>
//     </div>
// </button>
// `;

//  };