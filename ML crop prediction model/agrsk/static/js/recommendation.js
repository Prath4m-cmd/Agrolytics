// =========================
// CROP RECOMMENDATION
// =========================

const recommendationTool =
document.getElementById(
"recommendationTool"
);

// OPEN RECOMMENDATION PAGE

if(recommendationTool){

recommendationTool
.addEventListener(
"click",
()=>{

    window.location.href =
    "/recommendation";

});

}

// =========================
// BACK BUTTON
// =========================

const recommendationBackBtn =
document.getElementById(
"recommendationBackBtn"
);

if(recommendationBackBtn){

recommendationBackBtn
.addEventListener(
"click",
()=>{

    window.location.href =
    "/";

});

}