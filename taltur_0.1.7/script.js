var internalId = 0;
var activeId = 0;
var defaultBgImg = "url(https://images.unsplash.com/photo-1707343843437-caacff5cfa74?q=80&w=3475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";



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
  createBox.setAttribute("class", "box");
  createBox.innerHTML = '<div class="close_btn" onclick="this.parentNode.remove()">X</div><p>'+delegatNr+'</p>';
  document.getElementById("box_container").appendChild(createBox);
  internalId++;
  clearInput();
}

//Delete box at end of taltur

function delBox() {
  
  var toRemove = document.getElementById(activeId);
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

