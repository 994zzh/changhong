var oTab = document.getElementsByClassName("tab")[0];
var oLinks = oTab.querySelectorAll("a");
var oCon = document.getElementsByClassName("con")[0];
// console.log(oLinks);
var oCons = oCon.querySelectorAll("li");
oCons[0].style.display = "block";
for(let i=0;i<oLinks.length;i++){
    oLinks[i].onclick = function(){
        for(var j=0;j<oLinks.length;j++){
            oLinks[j].className = "";
        }
        this.className = "tab-sel";
        for(var k=0;k<oCons.length;k++){
            oCons[k].style.display = "none";
        }
        oCons[i].style.display = "block";
    }
}