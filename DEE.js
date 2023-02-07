
let form=document.getElementById("#task-form");
let title=document.getElementById("#task-title");
let Description= document.getElementById("#task-description");
let date=document.getElementById("#task-date");
let ADD=document.getElementById("#Add task");
let uncompletedtasks=document.getElementById("#Uncompleted task");
let Completedtasks=document.getElementById("#Completed task");

title.addEventListener("input", function(event) {
    newTodo.title = event.target.value;
})

title.addEventListener("input", function(event){
    newTodo.date=event.target.value;
})
title.addEventListener("input", function(event){
    newTodo.Description=event.target.value;
})

