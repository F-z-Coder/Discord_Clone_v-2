const downloadbtn_text=document.querySelectorAll(".change-text");
const downloadOrSignupBtn=document.getElementById("download-or-signup-btn");
const width=window.innerWidth;
if(width>1024){
    downloadbtn_text.forEach((node)=>{
        node.innerHTML="Download for Windows"
    });
    downloadOrSignupBtn.innerHTML="Sign up"
}

const openInBrowserBtn=document.getElementById("openinbrower-btn");
const downloadOrOpenSec=document.getElementById("download-or-open-sec");
const openInBrowserSection=document.getElementById("openinbrower-section");


openInBrowserBtn.addEventListener("click",()=>{
    downloadOrOpenSec.style.display="none";
    openInBrowserSection.style.display="block";
});

const mobileNav=document.querySelector(".mobile-nav");
const openNavBtn=document.getElementById("open-nav-btn");
const closeNav=document.getElementById("close-icon");
const body=document.getElementById("body");
openNavBtn.addEventListener("click",()=>{
    mobileNav.style.display="block";
    body.toggleAttribute("data-unscrollable");
    body.toggleAttribute("data-dim-effect");
});

closeNav.addEventListener("click",()=>{
    mobileNav.style.display="none";
    body.toggleAttribute("data-unscrollable");
    body.toggleAttribute("data-dim-effect");
})
console.log(openNavBtn);
console.log(mobileNav);
console.log(closeNav);
console.log(body)