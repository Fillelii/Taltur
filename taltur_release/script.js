var internalId = 0;
var activeId = 0;
var defaultBgImg = "url(https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=3475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";

let recurringId = [""]; /*Array logging recurring delegate turns*/

let queueNew = [""] /*Queue of New entries*/
let queueRec = [""] /*Queue of Recurring entries*/

function removeFromQueue(queueId) {
    
    let id = queue.indexOf($queueId);
}

//function generateBox() {
//}



// clearing the textbox after each submission;

function clearInput() {
  let input1 = document.getElementById("delegatNr");
  input1.value = "";
};

//Creates a new box


function addBox() {
 
 
  var delegatNr = document.getElementById("delegatNr").value;
  var createBox = document.createElement("div");
  createBox.setAttribute("id", internalId);
  
    
    // Checking if delegate has already spoken
    
    if (recurringId.includes(delegatNr) && !queueRec.includes(delegatNr)) {
        /*A delegate that has already had a turn*/
        
        queueRec.push(delegatNr);
        //recurringId.push(delegatNr);
        createBox.setAttribute("class", "box");
        createBox.innerHTML = '<div class="close_btn" onclick="this.parentNode.remove()">X</div><p>'+delegatNr+'</p>';
        document.getElementById("box_grid_2").appendChild(createBox);
    }
    
    if (!recurringId.includes(delegatNr) && !queueNew.includes(delegatNr))  {
        /*A new delegate that has not yet had a turn*/
              
        queueNew.push(delegatNr);
        recurringId.push(delegatNr);
        createBox.setAttribute("class", "box");
        createBox.innerHTML = '<div class="close_btn" onclick="this.parentNode.remove();">X</div>   <p>'+delegatNr+'</p>';
        document.getElementById("box_grid_1").appendChild(createBox);
        internalId++;

    clearInput();

    writeProgress();
    }


}


//Delete box at end of taltur

function delBox1() {
  
    

    
  var toRemove = document.getElementById("box_grid_1").nthChild(2);
  toRemove.remove();
  activeId++;

  
}

function delInstant() {
  
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
    addBox();
  }
}                     
);



