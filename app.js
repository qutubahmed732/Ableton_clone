document.querySelector(".hide").addEventListener("click", ()=>{
    let header = document.querySelector("header");
    let svg = document.querySelector(".none");
    if(header.style.display == "none"){
        header.style.display = "block";
        svg.style.display = "none";
    }else {
        header.style.display = "none";
        svg.style.display = "block";
    }
})