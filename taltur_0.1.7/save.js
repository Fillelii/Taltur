//writing save to local storage
function writeProgress() {
    if (localStorage) {
        var currentProgress = document.getElementById("box_container").innerHTML;
        
        localStorage.setItem("savedProgress", JSON.stringify(currentProgress));
        
    }
}

//loading save from local storage

function getProgress() {
    if (localStorage) {
        const savedProgress = localStorage.getItem("savedProgress");
        
        if (savedProgress){
            
        console.log("RAW.Saved progress: "+savedProgress);
        var savedProgressParsed = JSON.parse(savedProgress);
        console.log("PARSED.Saved progress: "+ savedProgressParsed);
        document.getElementById("box_container").innerHTML = savedProgressParsed;
        
        closeSaveMenu();
        }
    }
}


// Save Prompt popup


function openSaveMenu() {
    document.getElementById("popup_save_container").style.display = "block";
}

function closeSaveMenu() {
    document.getElementById("popup_save_container").style.display = "none";
}

/*

function saveSettings() {
    
    localStorage.setItem("BackgroundURL", JSON.stringify(backgroundURLValue));
    localStorage.setItem("PageTitle", JSON.stringify(pageHeader));
    
}


function loadSavedSettings() {
if(localStorage) {
    var savedBackgroundURLValue = localStorage.getItem("BackgroundURL");
    var savedPageHeader = localStorage.getItem("pageTitle");
    

    document.body.style.backgroundImage="url("+ savedBackgroundURLValue +")";
    

    document.getElementById("page_header").innerHTML = "<h1>"+ savedPageHeader +"</h1>";

}
    }
    */
