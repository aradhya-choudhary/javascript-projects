let btns = document.querySelectorAll("button");
let p = document.querySelector('p');
for(let btn of btns){

btn.addEventListener("click", () => {


    if(btn.innerText == "="){
        try {
        p.innerText = eval(p.innerText);
    }
    catch {
        p.innerText = "Error";
    }
}
    else if(btn.innerText == "All clear"){
        p.innerText = "";
    }
    else if(btn.innerText == "←"){
    p.innerText = p.innerText.slice(0,-1);
}
    else {
        p.innerText += btn.innerText;
    }
});
}