const downloadbtn_text=document.querySelectorAll(".downloadbtn-text");
const width=window.innerWidth;
if(width>1024){
    downloadbtn_text.forEach((node)=>{
        node.innerHTML="Download for Windows"
    })
}
