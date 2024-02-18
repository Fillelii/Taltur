function generateEntries() {
    console.log("Generate Pressed");
    var generatorCounter = 0;
    var generatorGoal = document.getElementById("generateAmmount").value;
    console.log(generatorGoal);
    
    for (let generatorCounter = 0; generatorCounter < generatorGoal; generatorCounter++ ) {
        addBox();
    };
    
};

