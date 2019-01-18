let oBtLeft = document.querySelector(".btn1"),
    oBtRig = document.querySelector(".btn2"),
    oDiv = document.querySelector(".course_text"),
    oBox = document.querySelector(".course_history"),
    oLi = document.getElementsByClassName("calendar")[0].getElementsByTagName("li");

// console.log(oLi);

var num = 1;
var n = 0;
var flag = true;
var m = 0;
var mn = num-1;
for (let i = 0;i<oLi.length;i++){
    oLi[i].onmouseover = function () {
        if (flag){
            flag = false;
            num = i+1;

            for (let k =0;k<oLi.length;k++){
                oLi[k].className = "";
            }
            oLi[i].className = "act";
            moveimg(num);
            setTimeout(()=>{
                flag = true
            },550)
        }
    }
}
function moveimg(m) {
    n = parseInt(-(m)*1000);
    oDiv.style.transition = "0.5s ease-in";
    oDiv.style.left = n + "px";

}
oBtLeft.onclick = function () {

    if (flag){
        flag = false;
        num--;
        moveimg(num);
        setTimeout(()=>{
            flag = true;
            if (oDiv.offsetLeft=="0"){
                oDiv.style.transition = "none";
                oDiv.style.left = -14000+"px";
                num = 14;
            }
        },550);
        mn = num-1;
        if (mn<0){
            mn = 13;
        }
        for (let k =0;k<oLi.length;k++){
            oLi[k].className = "";
        }

        console.log(num - 1);
        oLi[mn].className = "act";

    }
};
oBtRig.onclick = function () {
    if (flag){
        flag = false;
        num++;
        moveimg(num);
        setTimeout(()=>{
            flag = true;
            if (oDiv.offsetLeft=="-15000"){
                oDiv.style.transition = "none";
                oDiv.style.left = -1000+"px";
                num = 1;
            }
        },550);
        mn = num-1;
        for (let k =0;k<oLi.length;k++){
            oLi[k].className = "";
        }
        if (mn>13) {
            mn = 0;
        }
        console.log(num - 1);
        oLi[mn].className = "act";
    }
};






























