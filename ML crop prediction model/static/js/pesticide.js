// =========================
// PESTICIDE SCREEN
// =========================

const pesticideScreen =
document.getElementById(
"pesticideScreen"
);

const pesticideTool =
document.getElementById(
"pesticideTool"
);

const backFromPesticide =
document.getElementById(
"backFromPesticide"
);

// OPEN

if(pesticideTool){

pesticideTool.addEventListener(
"click",
()=>{

    homeScreen.style.display =
    "none";

    pesticideScreen.style.display =
    "block";

});

}

// BACK

if(backFromPesticide){

backFromPesticide
.addEventListener(
"click",
()=>{

    pesticideScreen.style.display =
    "none";

    homeScreen.style.display =
    "block";

});

}

/* =========================
    FIELD CROPS SCREEN
========================= */

const fieldCropsScreen =
document.getElementById(
"fieldCropsScreen"
);

const fieldCropCard =
document.getElementById(
"fieldCropCard"
);

const backFromFieldCrops =
document.getElementById(
"backFromFieldCrops"
);

// OPEN

if(fieldCropCard){

fieldCropCard.addEventListener(
"click",
()=>{

    pesticideScreen.style.display =
    "none";

    fieldCropsScreen.style.display =
    "block";

});

}

// BACK

if(backFromFieldCrops){

backFromFieldCrops
.addEventListener(
"click",
()=>{

    fieldCropsScreen.style.display =
    "none";

    pesticideScreen.style.display =
    "block";

});

}

/* =========================
    AREA
========================= */

let areaValue = 1;

let areaUnit = "acre";

const areaValueText =
document.getElementById(
"areaValue"
);

const areaUnitText =
document.getElementById(
"areaUnitText"
);

// PLUS

const fieldPlus =
document.getElementById(
"fieldPlus"
);

if(fieldPlus){

fieldPlus.addEventListener(
"click",
()=>{

    areaValue += 0.5;

    updateArea();

});

}

// MINUS

const fieldMinus =
document.getElementById(
"fieldMinus"
);

if(fieldMinus){

fieldMinus.addEventListener(
"click",
()=>{

    if(areaValue > 0.5){

        areaValue -= 0.5;

        updateArea();

    }

});

}

// UNIT

document
.querySelectorAll(
'input[name="areaUnit"]'
)
.forEach(radio=>{

radio.addEventListener(
"change",
()=>{

    areaUnit =
    radio.value;

    updateArea();

});

});

// UPDATE

function updateArea(){

    if(areaValueText){

    areaValueText.innerText =
    areaValue.toFixed(1);

    }

    if(areaUnitText){

    areaUnitText.innerText =
    areaUnit;

    }

}

/* =========================
    FIELD CALCULATOR
========================= */

const fieldCalculateBtn =
document.getElementById(
"fieldCalculateBtn"
);

if(fieldCalculateBtn){

fieldCalculateBtn
.addEventListener(
"click",
()=>{

    const dosage =
    Number(
    document.getElementById(
    "dosageInput"
    ).value
    );

    const water =
    Number(
    document.getElementById(
    "waterInput"
    ).value
    );

    const pump =
    Number(
    document.getElementById(
    "pumpSize"
    ).value
    );

    const total =
    dosage * areaValue;

    const refill =
    (dosage / water)
    * pump;

    const refillTimes =
    water / pump;

    document.getElementById(
    "totalProduct"
    ).innerText =
    total.toFixed(1)
    + " ml";

    document.getElementById(
    "dosePerRefill"
    ).innerText =
    refill.toFixed(1)
    + " ml";

    document.getElementById(
    "pumpRefills"
    ).innerText =
    refillTimes.toFixed(1)
    + " times";

    document.getElementById(
    "recentTotal"
    ).innerText =
    total.toFixed(1)
    + " ml";

    document.getElementById(
    "recentDose"
    ).innerText =
    refill.toFixed(1)
    + " ml";

    document.getElementById(
    "recentRefills"
    ).innerText =
    refillTimes.toFixed(1)
    + " times";

});

}

/* =========================
    TREES SCREEN
========================= */

const treesScreen =
document.getElementById(
"treesScreen"
);

const treeCard =
document.querySelectorAll(
".pesticide-card"
)[1];

const backFromTrees =
document.getElementById(
"backFromTrees"
);

// OPEN

if(treeCard){

treeCard.addEventListener(
"click",
()=>{

    pesticideScreen.style.display =
    "none";

    treesScreen.style.display =
    "block";

});

}

// BACK

if(backFromTrees){

backFromTrees.addEventListener(
"click",
()=>{

    treesScreen.style.display =
    "none";

    pesticideScreen.style.display =
    "block";

});

}

/* =========================
    TREE WATER
========================= */

let treeWater = 20;

const treeWaterValue =
document.getElementById(
"treeWaterValue"
);

function updateTreeWater(){

    if(treeWaterValue){

    treeWaterValue.innerText =
    treeWater;

    }

}

// PLUS

const treePlus =
document.getElementById(
"treePlus"
);

if(treePlus){

treePlus.addEventListener(
"click",
()=>{

    treeWater += 5;

    updateTreeWater();

});

}

// MINUS

const treeMinus =
document.getElementById(
"treeMinus"
);

if(treeMinus){

treeMinus.addEventListener(
"click",
()=>{

    if(treeWater > 5){

        treeWater -= 5;

        updateTreeWater();

    }

});

}

/* =========================
    TREE CALCULATOR
========================= */

const treeCalculateBtn =
document.getElementById(
"treeCalculateBtn"
);

if(treeCalculateBtn){

treeCalculateBtn
.addEventListener(
"click",
()=>{

    const dosage =
    Number(
    document.getElementById(
    "treeDosageInput"
    ).value
    );

    const pump =
    Number(
    document.getElementById(
    "treePumpSize"
    ).value
    );

    const total =
    dosage * treeWater;

    const refill =
    dosage * pump;

    const refillTimes =
    treeWater / pump;

    document.getElementById(
    "treeTotalProduct"
    ).innerText =
    total.toFixed(1)
    + " ml";

    document.getElementById(
    "treeDosePerRefill"
    ).innerText =
    refill.toFixed(1)
    + " ml";

    document.getElementById(
    "treePumpRefills"
    ).innerText =
    refillTimes.toFixed(1)
    + " times";

    document.getElementById(
    "treeRecentTotal"
    ).innerText =
    total.toFixed(1)
    + " ml";

    document.getElementById(
    "treeRecentDose"
    ).innerText =
    refill.toFixed(1)
    + " ml";

    document.getElementById(
    "treeRecentRefills"
    ).innerText =
    refillTimes.toFixed(1)
    + " times";

});

}

updateArea();
updateTreeWater();