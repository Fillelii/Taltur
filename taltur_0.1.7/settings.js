/*MENU*/
function openMenu() {
 document.getElementById("popup_menu_container").style.display = "block";
  
}

function closeMenu() {
  
   document.getElementById("popup_menu_container").style.display = "none";

}

// Settings entry for editing the background image.
function setBackground() {
  
    var backgroundURLValue = document.getElementById("backgroundURL").value;
  
    console.log(backgroundURLValue);
  
    document.body.style.backgroundImage="url("+backgroundURLValue+")";
    //document.body.style.backgroundColor="#000000";
  
}

function resetBackground() {
  document.body.style.backgroundImage = "";

 };

function openAdvancedSettings() {
    
    document.getElementById("advanced_settings").style.display = "block";

}
function closeAdvancedSettings() {
    
    document.getElementById("advanced_settings").style.display = "none";

}

function setPageHeader() {
    
    var pageHeader = document.getElementById("pageHeaderInput").value;
    document.getElementById("page_header").innerHTML = "<h1>"+pageHeader+"</h1>";
    
}






closeMenu();
setPageHeader();