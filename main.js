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
const userNameWapper=document.getElementById("username-wrapper");

openInBrowserBtn.addEventListener("click",()=>{
    downloadOrOpenSec.style.display="none";
    openInBrowserSection.style.display="block";
    // settimeout is used to delay the task of increase usernamewapper max-width
    // because transition/animation not works suddenly after display property change
    // here it changes from none to block as its parent display changes
    setTimeout(() => { userNameWapper.style.maxWidth="25rem"; }, 1);
});

const mobileNav=document.querySelector(".mobile-nav");
const openNavBtn=document.getElementById("open-nav-btn");
const closeNav=document.getElementById("close-icon");
const body=document.getElementById("body");

openNavBtn.addEventListener("click",()=>{
    mobileNav.toggleAttribute("visible");
    body.toggleAttribute("data-unscrollable");
    body.toggleAttribute("data-dim-effect");
});

closeNav.addEventListener("click",()=>{
    // for nav  not visible
    mobileNav.toggleAttribute("visible");
    body.toggleAttribute("data-unscrollable");
    body.toggleAttribute("data-dim-effect");
})
