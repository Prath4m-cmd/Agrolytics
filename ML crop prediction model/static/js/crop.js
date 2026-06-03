// =========================
// CROPS DATA
// =========================

const crops = [

    {
        name:"Sorghum",
        emoji:"🌾",
        N:9.9,
        P:4,
        K:4.5
    },

    {
        name:"Maize",
        emoji:"🌽",
        N:12,
        P:5,
        K:6
    },

    {
        name:"Apple",
        emoji:"🍎",
        N:8,
        P:3,
        K:5
    },

    {
        name:"Banana",
        emoji:"🍌",
        N:15,
        P:7,
        K:10
    },

    {
        name:"Barley",
        emoji:"🌾",
        N:10,
        P:5,
        K:5
    },

    {
        name:"Bean",
        emoji:"🫘",
        N:7,
        P:4,
        K:4
    },

    {
        name:"Cabbage",
        emoji:"🥬",
        N:11,
        P:5,
        K:7
    }

];

// =========================
// SELECTED CROPS
// =========================

let selectedCrops = [
    crops[0],
    crops[1],
    crops[2]
];

let currentCrop = crops[0];

// =========================
// ELEMENTS
// =========================

const selectedCropsContainer =
document.getElementById("selectedCrops");

const cropModal =
document.getElementById("cropModal");

const openCropModal =
document.getElementById("openCropModal");

const closeCropModal =
document.getElementById("closeCropModal");

const cropGrid =
document.getElementById("cropGrid");

const saveCrops =
document.getElementById("saveCrops");

// CROP SELECTOR

const openCropSelector =
document.getElementById("openCropSelector");

const cropSelectorModal =
document.getElementById("cropSelectorModal");

const closeCropSelector =
document.getElementById("closeCropSelector");

const yourCropGrid =
document.getElementById("yourCropGrid");

const otherCropGrid =
document.getElementById("otherCropGrid");

const selectedCropName =
document.getElementById("selectedCropName");

const cropSearch =
document.getElementById("cropSearch");

// =========================
// RENDER CROPS
// =========================

function renderSelectedCrops(){

    if(!selectedCropsContainer) return;

    selectedCropsContainer.innerHTML = "";

    selectedCrops.forEach((crop,index)=>{

        const div =
        document.createElement("div");

        div.className = "crop-item";

        div.innerHTML = `
            <div class="crop-circle">

                <span class="crop-emoji">
                    ${crop.emoji}
                </span>

                <button
                    class="remove-btn"
                    onclick="removeCrop(${index})">

                    ×

                </button>

            </div>

            <p>${crop.name}</p>
        `;

        selectedCropsContainer
        .appendChild(div);

    });

}

// =========================
// REMOVE CROP
// =========================

function removeCrop(index){

    selectedCrops.splice(index,1);

    renderSelectedCrops();

}

window.removeCrop = removeCrop;

// =========================
// CROP MODAL
// =========================

if(openCropModal){

openCropModal.addEventListener(
"click",
()=>{

    cropModal.style.display =
    "flex";

    renderCropGrid();

});

}

if(closeCropModal){

closeCropModal.addEventListener(
"click",
()=>{

    cropModal.style.display =
    "none";

});

}

if(saveCrops){

saveCrops.addEventListener(
"click",
()=>{

    cropModal.style.display =
    "none";

    renderSelectedCrops();

});

}

// =========================
// CROP GRID
// =========================

function renderCropGrid(){

    if(!cropGrid) return;

    cropGrid.innerHTML = "";

    crops.forEach(crop=>{

        const div =
        document.createElement("div");

        div.className =
        "crop-option";

        div.innerHTML = `
            <div class="circle">
                ${crop.emoji}
            </div>

            <p>${crop.name}</p>
        `;

        div.addEventListener(
        "click",
        ()=>{

            const exists =
            selectedCrops.find(
            item =>
            item.name===crop.name
            );

            if(
                !exists &&
                selectedCrops.length < 8
            ){

                selectedCrops.push(
                crop
                );

                renderSelectedCrops();

            }

        });

        cropGrid.appendChild(div);

    });

}

// =========================
// CROP SELECTOR
// =========================

if(openCropSelector){

openCropSelector.addEventListener(
"click",
()=>{

    cropSelectorModal
    .style.display =
    "flex";

    renderCropSelector("");

});

}

if(closeCropSelector){

closeCropSelector
.addEventListener(
"click",
()=>{

    cropSelectorModal
    .style.display =
    "none";

});

}

// =========================
// RENDER SELECTOR
// =========================

function renderCropSelector(
searchText
){

    if(!yourCropGrid) return;

    yourCropGrid.innerHTML = "";
    otherCropGrid.innerHTML = "";

    selectedCrops.forEach(
    crop=>{

        if(
        crop.name
        .toLowerCase()
        .includes(searchText)
        ){

            yourCropGrid
            .appendChild(
            createCropCard(crop)
            );

        }

    });

    crops.forEach(crop=>{

        const exists =
        selectedCrops.find(
        item =>
        item.name===crop.name
        );

        if(
        !exists &&
        crop.name
        .toLowerCase()
        .includes(searchText)
        ){

            otherCropGrid
            .appendChild(
            createCropCard(crop)
            );

        }

    });

}

// =========================
// CREATE CARD
// =========================

function createCropCard(crop){

    const div =
    document.createElement("div");

    div.className =
    "selector-card";

    if(
    currentCrop.name === crop.name
    ){

        div.classList.add(
        "active-crop"
        );

    }

    div.innerHTML = `
        <div class="selector-circle">
            ${crop.emoji}
        </div>

        <p>${crop.name}</p>
    `;

    div.addEventListener(
    "click",
    ()=>{

        currentCrop = crop;

        if(selectedCropName){

        selectedCropName.innerText =
        crop.name;

        }

        if(
        typeof calculateNPK
        === "function"
        ){

        calculateNPK();

        }

        if(
        typeof calculateResultValues
        === "function"
        ){

        calculateResultValues();

        }

        cropSelectorModal
        .style.display =
        "none";

    });

    return div;

}

// =========================
// SEARCH
// =========================

if(cropSearch){

cropSearch.addEventListener(
"input",
()=>{

    renderCropSelector(
    cropSearch.value
    .toLowerCase()
    );

});

}

// =========================
// INITIAL
// =========================

renderSelectedCrops();