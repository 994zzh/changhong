var conBox = document.querySelectorAll(".content-navigate li");
var countBox = document.querySelectorAll(".content-count li");
for(let i=0;i<conBox.length;i++){
    conBox[i].onclick=()=>{
        for(let j=0;j<conBox.length;j++){
            countBox[j].style.display="none";
            conBox[j].style.background="#dfe4e8";
        }
        countBox[i].style.display="block";
        conBox[i].style.background="#fff";
    }
}