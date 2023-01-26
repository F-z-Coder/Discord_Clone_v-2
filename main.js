const downloadbtn_text=document.querySelectorAll(".downloadbtn-text");
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
})
console.log(openInBrowserBtn);
console.log(openInBrowserSection);
console.log(downloadOrOpenSec);