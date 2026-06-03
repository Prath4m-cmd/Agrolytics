// =========================
// FERTILIZER SCREEN
// =========================

const homeScreen =
document.getElementById(
"homeScreen"
);

const fertilizerScreen =
document.getElementById(
"fertilizerScreen"
);

const fertilizerTool =
document.getElementById(
"fertilizerTool"
);

const backToHome =
document.getElementById(
"backToHome"
);

// OPEN

if(fertilizerTool){

fertilizerTool
.addEventListener(
"click",
()=>{

    homeScreen.style.display =
    "none";

    fertilizerScreen.style.display =
    "block";

});

}

// BACK

if(backToHome){

backToHome
.addEventListener(
"click",
()=>{

    fertilizerScreen.style.display =
    "none";

    homeScreen.style.display =
    "block";

});

}

// =========================
// NPK VALUES
// =========================

const nitrogenValue =
document.getElementById(
"nitrogenValue"
);

const phosphorusValue =
document.getElementById(
"phosphorusValue"
);

const potassiumValue =
document.getElementById(
"potassiumValue"
);

// =========================
// FIELD
// =========================

let fieldValue = 0.5;

let currentUnit = "acre";

const fieldValueText =
document.getElementById(
"fieldValue"
);

const fieldUnitText =
document.getElementById(
"fieldUnitText"
);

const plusBtn =
document.getElementById(
"plusBtn"
);

const minusBtn =
document.getElementById(
"minusBtn"
);

// PLUS

if(plusBtn){

plusBtn.addEventListener(
"click",
()=>{

    fieldValue += 0.5;

    updateField();

});

}

// MINUS

if(minusBtn){

minusBtn.addEventListener(
"click",
()=>{

    if(fieldValue > 0.5){

        fieldValue -= 0.5;

        updateField();

    }

});

}

// =========================
// UPDATE FIELD
// =========================

function updateField(){

    if(fieldValueText){

    fieldValueText.innerText =
    fieldValue.toFixed(1);

    }

    if(fieldUnitText){

    fieldUnitText.innerText =
    currentUnit;

    }

    calculateNPK();

}

// =========================
// UNIT CHANGE
// =========================

const unitRadios =
document.querySelectorAll(
'input[name="unit"]'
);

unitRadios.forEach(
radio=>{

radio.addEventListener(
"change",
()=>{

    currentUnit =
    radio.value;

    updateField();

});

});

// =========================
// CONVERT TO ACRE
// =========================

function convertToAcre(){

    if(currentUnit==="acre"){

        return fieldValue;

    }

    if(currentUnit==="gunta"){

        return fieldValue / 40;

    }

    if(currentUnit==="hectare"){

        return fieldValue * 2.5;

    }

    return fieldValue;

}

// =========================
// CALCULATE NPK
// =========================

function calculateNPK(){

    if(
        !nitrogenValue ||
        !currentCrop
    ) return;

    const acre =
    convertToAcre();

    nitrogenValue.innerText =
    (
        currentCrop.N *
        acre
    ).toFixed(1)
    + " kg";

    phosphorusValue.innerText =
    (
        currentCrop.P *
        acre
    ).toFixed(1)
    + " kg";

    potassiumValue.innerText =
    (
        currentCrop.K *
        acre
    ).toFixed(1)
    + " kg";

}

// =========================
// RESULT
// =========================

const calculateBtn =
document.getElementById(
"calculateBtn"
);

const resultSection =
document.getElementById(
"resultSection"
);

const mopValue =
document.getElementById(
"mopValue"
);

const tspValue =
document.getElementById(
"tspValue"
);

const ureaValue =
document.getElementById(
"ureaValue"
);

// CALCULATE

if(calculateBtn){

calculateBtn.addEventListener(
"click",
()=>{

    resultSection.style.display =
    "block";

    calculateResultValues();

});

}

// =========================
// RESULT VALUES
// =========================

function calculateResultValues(){

    const acre =
    convertToAcre();

    if(mopValue){

    mopValue.innerText =
    (
        7.6 * acre
    ).toFixed(1)
    + " kg";

    }

    if(tspValue){

    tspValue.innerText =
    (
        8.8 * acre
    ).toFixed(1)
    + " kg";

    }

    if(ureaValue){

    ureaValue.innerText =
    (
        22 * acre
    ).toFixed(1)
    + " kg";

    }

}

// =========================
// INITIAL
// =========================

calculateNPK();

calculateResultValues();