import {
  app,
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "./firebase.js";

//console.log(app, db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc)
let addtask = document.querySelector("#addtask");

var input = document.getElementById("input");
var taskContainer = document.getElementById("task-container");

addtask.addEventListener("click", addtodo);
async function addtodo() {
  try {
    if (!input.value) {
      alert("Enter valide Task");
      return;
    }
    const userTodo = {
      todo: input.value,
    };
    const docRef = await addDoc(collection(db, "todo"), userTodo);
    //console.log("Document written with ID: ", docRef.id);
    getData();
    return;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

window.getData = getData;
async function getData() {
  try {
    input.value = "";
    const readTodo = await getDocs(collection(db, "todo"));
    taskContainer.innerHTML = "";
    readTodo.forEach((doc) => {
      //console.log(`${doc.id} => ${doc.data().todo}`);
      var UI = `<ul><li><p>${doc.data().todo}</p> <span id=${
        doc.id
      } class="edit" onclick="editFnx(this)">📝</span><span id=${
        doc.id
      } class="delete" onclick="deleteFnx(this)">🗑️</span></li></ul>`;
      taskContainer.innerHTML += UI;
    });
  } catch (error) {
    console.log("error", error.code, error.message);
  }
}
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addtodo();
  }
});

window.deleteFnx = deleteFnx;
async function deleteFnx(e) {
  //console.log(e);
  await deleteDoc(doc(db, "todo", e.id));
  getData();
}

window.editFnx = editFnx;
async function editFnx(e) {
  var oldValue = e.previousElementSibling.innerText;
  var editPrompt = prompt("Enter the update tasks", `${oldValue}`.trim());
  if (!editPrompt) {
    alert("Enter valide Task");
    return;
  }
  const updateValue = doc(db, "todo", e.id);
  await updateDoc(updateValue, {
    todo: editPrompt,
  });
  getData();
}

// <span id=i onclick="cpl(this)" class="complete">✔️</span> <span id=i onclick="notCpl(this)" class="notComplete">❌</span>
// function cpl(e) {
//   // console.log("cpl")
//   var taskArr = JSON.parse(localStorage.getItem("taskNotes"));
//   var idx = e.id;
//   taskArr[idx].completed = !taskArr[idx].completed;
//   //`<span style='color:red;'>${taskArr[idx]}</span>`
//   //e.nextElementSibling.classList.toggle("lineThrough");
//   localStorage.setItem("taskNotes", JSON.stringify(taskArr));
//   UI();
// }
// function notCpl(e){
//   console.log("not cpl")
//   var taskArr = JSON.parse(localStorage.getItem("taskNotes"));
//   var idx = e.id;
//   taskArr[idx].completed = !taskArr[idx].completed;
//   localStorage.setItem("taskNotes", JSON.stringify(taskArr));
//   UI();
// }
