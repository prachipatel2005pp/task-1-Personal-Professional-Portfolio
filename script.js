function pageLoaded(){
    showOnScroll();
}

function sendMessage(){
    alert("Thank you! Your message has been sent.");
}

window.addEventListener("scroll", showOnScroll);

function showOnScroll(){
    let sections = document.querySelectorAll("section");
    let trigger = window.innerHeight - 100;

    sections.forEach(sec=>{
        let top = sec.getBoundingClientRect().top;
        if(top < trigger){
            sec.classList.add("show");
        }
    });
}