var internalId = 0;
var activeId = 0;
var defaultBgImg = "url(https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=3475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";

let register = [""];  /* Array logging recurring delegate turns*/
let queue = [""];     /* Queue of entries. */


let queueNew = [""] /*Queue of New entries, currently not in use*/
let queueRec = [""] /*Queue of Recurring entries, currently not in use*/


//function generateBox() {
//}



// clearing the textbox after each submission;

function clearInput() {
  let input1 = document.getElementById("delegatNr");
  input1.value = "";
};



// Spawns a new box
// Triggered by the newEntry Function

function createBox(id, state, delegatNr) {

    
    let createBox = document.createElement("div");
    createBox.setAttribute("class", "box");
    createBox.setAttribute("id", id);
    // createBox.innerHTML = '<div class="close_btn" onclick="this.parentNode.remove()">X</div><p>'+delegatNr+'</p>';
    //createBox.innerHTML = `<div class="close_btn" onclick="delInstant(this.parentNode.id)">X</div><p>`+delegatNr+`</p>`;
    createBox.innerHTML = `<div class="close_btn" onclick="delInstant(this.parentNode.id, this.ariaLabel)" aria-label="${state}">X</div><p>`+delegatNr+`</p>`;
    document.getElementById("box_grid_"+state).appendChild(createBox);
    
}


// Registers new entry, checking if new id or recurring. Calls the createBox action.
// Triggered by the "ADD" button in GUI

function newEntry() {
    
    // Defining internal functions
    // nothing here
    
    var delegatNr = document.getElementById("delegatNr").value; // fetching input value
    console.log("Fetched value is: " + delegatNr);

    if (!queueNew.includes(delegatNr) && !queueRec.includes(delegatNr)) { //checking wether entry is already queued
        
        if (!register.includes(delegatNr)) { // if number is new

            register.push(delegatNr);
            queueNew.push(delegatNr);


            var entryQueueId = queueNew.indexOf(delegatNr);

            createBox(entryQueueId, 1, delegatNr);

        } // if number is new

        else if (register.includes(delegatNr)) { // if number has been entered before

            queueRec.push(delegatNr);

            var entryQueueId = queue.indexOf(delegatNr);

            //createBox(entryQueueId, New);
            createBox(entryQueueId, 2, delegatNr);

        } // if number has been entered before
    }
    
    else {console.log("Entry already queued")}; // Warns that entry is already queued

    
    
}

// ===============
//    DELETING
// ===============
// This section handles various functions related to the automatic or manual deletion of entries.



//defines the function that deletes an entry from the queues. Called by any delete-command, auto or manual.

function removeFromQueue(id, queue) {
    
    if (queue == 1) {
        console.log("Entry ID is: " + id);
        console.log("Queue New before deletion: " + queueNew);
        queueNew.splice(id, 1);
        console.log("Entry deleted!");
        console.log("Queue New after deletion: " + queueNew);
    }
    
    else if (queue == 2) {
        console.log("Entry ID is: " + id);
        console.log("Queue Rec before deletion: " + queueNew);
        queueRec.splice(id, 1);
        console.log("Entry deleted!");
        console.log("Queue Rec after deletion: " + queueNew);
    }
    
    else {console.log("Unexpected error, queue was unknown!");}
    
}



//Delete box at end of taltur (auto-del)

function delBox1() {
  

    
  var toRemove = document.getElementById("box_grid_1").nthChild(2);
  toRemove.remove();
  activeId++;

  
}



function delInstant(id, queue) {
   // console.log("recieved delete command for ID: " + id "and ");
    
    document.getElementById(id).remove();
    
    removeFromQueue(id, queue);
  
}

// x-button to remove box manually
/*
const onClick = (event) => {
  console.log(event.src.Element.id);
}

window.addEventListener('click', onClick);
*/


// Allows submit with enter key

let input = document.querySelector("input");

input.addEventListener('keyup', (e) =>  {
  if(e.keyCode === 13) {
    newEntry();
  }
});



