// =========================
// FARMING SCREEN
// =========================

const farmingTool =
document.getElementById(
"farmingTool"
);

const farmingScreen =
document.getElementById(
"farmingScreen"
);

const backFromFarming =
document.getElementById(
"backFromFarming"
);

// OPEN

if(farmingTool){

farmingTool.addEventListener(
"click",
()=>{

    homeScreen.style.display =
    "none";

    farmingScreen.style.display =
    "block";

});

}

// BACK

if(backFromFarming){

backFromFarming
.addEventListener(
"click",
()=>{

    farmingScreen.style.display =
    "none";

    homeScreen.style.display =
    "block";

});

}

/* =========================
    ESTIMATED PROFIT
========================= */

const estimatedProfitCard =
document.getElementById(
"estimatedProfitCard"
);

const estimatedScreen =
document.getElementById(
"estimatedScreen"
);

const backFromEstimated =
document.getElementById(
"backFromEstimated"
);

// OPEN

if(estimatedProfitCard){

estimatedProfitCard
.addEventListener(
"click",
()=>{

    farmingScreen.style.display =
    "none";

    estimatedScreen.style.display =
    "block";

});

}

// BACK

if(backFromEstimated){

backFromEstimated
.addEventListener(
"click",
()=>{

    estimatedScreen.style.display =
    "none";

    farmingScreen.style.display =
    "block";

});

}

/* =========================
    PROFIT CALCULATOR
========================= */

const profitCalculateBtn =
document.getElementById(
"profitCalculateBtn"
);

if(profitCalculateBtn){

profitCalculateBtn
.addEventListener(
"click",
()=>{

    const yieldValue =
    Number(
    document.getElementById(
    "yieldInput"
    ).value
    );

    const priceValue =
    Number(
    document.getElementById(
    "priceInput"
    ).value
    );

    const expenseValue =
    Number(
    document.getElementById(
    "expenseInput"
    ).value
    );

    const result =
    (
        yieldValue *
        priceValue
    )
    - expenseValue;

    document.getElementById(
    "profitResult"
    ).innerText =
    "₹" +
    result.toLocaleString();

    document.getElementById(
    "recentProfit"
    ).innerText =
    "₹" +
    result.toLocaleString();

    document.getElementById(
    "recentYield"
    ).innerText =
    yieldValue +
    " kg";

    document.getElementById(
    "recentPrice"
    ).innerText =
    "₹" +
    priceValue +
    "/kg";

    document.getElementById(
    "recentExpense"
    ).innerText =
    "₹" +
    expenseValue;

    document.getElementById(
    "profitFormula"
    ).innerText =

    "(" +
    yieldValue +
    " × ₹" +
    priceValue +
    ") - ₹" +
    expenseValue;

    document.getElementById(
    "profitFormulaResult"
    ).innerText =
    "₹" +
    result.toLocaleString();

});

}

/* =========================
    PROFIT MODAL
========================= */

const profitModal =
document.getElementById(
"profitModal"
);

const openProfitModal =
document.getElementById(
"openProfitModal"
);

const closeProfitModal =
document.getElementById(
"closeProfitModal"
);

if(openProfitModal){

openProfitModal
.addEventListener(
"click",
()=>{

    profitModal.style.display =
    "flex";

});

}

if(closeProfitModal){

closeProfitModal
.addEventListener(
"click",
()=>{

    profitModal.style.display =
    "none";

});

}

/* =========================
    MAXIMUM INPUT BUDGET
========================= */

const maximumBudgetCard =
document.getElementById(
"maximumBudgetCard"
);

const maximumBudgetScreen =
document.getElementById(
"maximumBudgetScreen"
);

const backFromBudget =
document.getElementById(
"backFromBudget"
);

// OPEN

if(maximumBudgetCard){

maximumBudgetCard
.addEventListener(
"click",
()=>{

    farmingScreen.style.display =
    "none";

    maximumBudgetScreen.style.display =
    "block";

});

}

// BACK

if(backFromBudget){

backFromBudget
.addEventListener(
"click",
()=>{

    maximumBudgetScreen.style.display =
    "none";

    farmingScreen.style.display =
    "block";

});

}

/* =========================
    BUDGET CALCULATOR
========================= */

const budgetCalculateBtn =
document.getElementById(
"budgetCalculateBtn"
);

if(budgetCalculateBtn){

budgetCalculateBtn
.addEventListener(
"click",
()=>{

    const yieldValue =
    Number(
    document.getElementById(
    "budgetYieldInput"
    ).value
    );

    const priceValue =
    Number(
    document.getElementById(
    "budgetPriceInput"
    ).value
    );

    const result =
    yieldValue *
    priceValue;

    let formatted =
    "₹" +
    result.toLocaleString();

    if(result >= 100000){

        formatted =
        "₹" +
        (
            result /
            100000
        ).toFixed(2)
        +
        " Lakh";

    }

    document.getElementById(
    "budgetResult"
    ).innerText =
    formatted;

    document.getElementById(
    "budgetRecentResult"
    ).innerText =
    formatted;

    document.getElementById(
    "budgetRecentYield"
    ).innerText =
    yieldValue +
    " " +
    document.getElementById(
    "budgetYieldUnit"
    ).value;

    document.getElementById(
    "budgetRecentPrice"
    ).innerText =
    "₹" +
    priceValue +
    "/kg";

    document.getElementById(
    "budgetFormula"
    ).innerText =

    yieldValue +
    " × ₹" +
    priceValue;

    document.getElementById(
    "budgetFormulaResult"
    ).innerText =
    formatted;

});

}

/* =========================
    BUDGET MODAL
========================= */

const budgetModal =
document.getElementById(
"budgetModal"
);

const openBudgetModal =
document.getElementById(
"openBudgetModal"
);

const closeBudgetModal =
document.getElementById(
"closeBudgetModal"
);

if(openBudgetModal){

openBudgetModal
.addEventListener(
"click",
()=>{

    budgetModal.style.display =
    "flex";

});

}

if(closeBudgetModal){

closeBudgetModal
.addEventListener(
"click",
()=>{

    budgetModal.style.display =
    "none";

});

}