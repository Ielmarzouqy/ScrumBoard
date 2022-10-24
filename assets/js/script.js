/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
var idToUpDate;

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
let editBtn = document.getElementById("editBtn");

let toDo =document.getElementById("to-do-tasks-count");
let inProgress = document.getElementById("in-progress-tasks-count");
let done = document.getElementById("done-tasks-count");

afficher();

    function afficher(){

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
                                    <div class = "">
                                    <button onclick = "prepareTaskData( ${i})" type="button" class="btn4 me-3 mb-3 float-right border"  data-toggle="modal" data-target="#modal-task" >Edit</button>
                                    <button onclick = "deleteTask(  ${i})" type="button" class="btn3 me-3 float-right border" data-dismiss="modal">Delete</button>
                                    </div>

 								</div>
 							</button>`;
           toDo.innerHTML++;
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
                                    <div class = "d-flex">
                                    <button onclick = "prepareTaskData(${i})" type="button" class="btn4 me-3 mb-3 float-right border"  data-toggle="modal" data-target="#modal-task" >Edit</button>
                                    <button onclick = "deleteTask( ${i})" type="button" class="btn3 me-3 float-right border" data-dismiss="modal">Delete</button>
                                    </div>

								</div>
							</button>`;
                           
                            inProgress.innerHTML++; 
                        
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
                                    <div class = "">
                                    <button onclick = "prepareTaskData(${i})" type="button" class="btn4 me-3 mb-3 float-right border"  data-toggle="modal" data-target="#modal-task" >Edit</button>
                                    <button onclick = "deleteTask( ${i})" type="button" class="btn3 me-3 float-right border" data-dismiss="modal">Delete</button>
                                    </div>
								</div>
							</button>`;
                           
                            done.innerHTML++;
        }     
}

};
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
function resetForm(){
    update.style.display = "none";
    save.style.display = "block";

    document.getElementById('date').value = "";
    document.getElementById('type').value = "";
    document.getElementById('property').value = "";
    document.getElementById('status').value = "";
    document.getElementById('description').value = "";

}
 
// clear inputs
function clearInput(){
    title.value = '';
    priority_select.value ='';
    status_select.value ='';
    date.value = '';
    description.value = '';
}
function prepareTaskData(d){
   idToUpDate=d;
    if(tasks[d].type=='Bug'){
        typeBug.checked=true;
    }else{
        typeFeature.checked=true;
    }
    title.value = tasks[d].title;
    date.value = tasks[d].date;
    description.value = tasks[d].description;
    priority_select.value = tasks[d].priority;
    status_select.value = tasks[d].status;

    update.style.display = "block";
    save.style.display = "none";

    // document.getElementById("save").innerHTML= `<button type="button" class="btn btn-warning  border d-none" data-dismiss="modal" onclick="editTask()">update</button>`;
}
function initTaskForm() {
    // Clear task form from data
    let tasks_to_delete = document.querySelectorAll('.task');
    for(let t of tasks_to_delete){
        t.remove();
        toDo.innerHTML='';
        inProgress.innerHTML='';
        done.innerHTML='';
    }

}

function editTask() {

    if(typeBug.checked){
        tasks[idToUpDate].type = 'Bug';
    }else{
        tasks[idToUpDate].type = 'Feature';
    }
    tasks[idToUpDate].title = title.value;
    tasks[idToUpDate].date=date.value;
    tasks[idToUpDate].description= description.value ;
    tasks[idToUpDate].priority= priority_select.value ;
    tasks[idToUpDate].status=status_select.value ;
    initTaskForm();
    afficher();
}                                    

function deleteTask(i) {
    // Get index of task in the array
    // Remove task from array by index splice function
    tasks.splice(i,1);
    // close modal form
    // refresh tasks
    afficher();
}